---
layout: post
title: 企划星全栈架构总览：五个可构建单元
date: 2026-09-16 10:00:00+0800
description: Flutter 客户端、Go 业务 API、Admin 运营服务、Next.js 官网与共享内核——彼此只靠 HTTP 契约耦合。
tags: architecture
categories: planstar
---

企划星全仓库按**五个可构建单元**划分，彼此通过 HTTP/HTTPS API 契约耦合，无共享 Go 包。

## 1. Flutter 客户端

以 `lib/app` 为组合根（启动、GoRouter 路由与登录门禁、深链、主题），`lib/shell` 提供底部导航外壳，`lib/features/<name>` 按领域垂直切片组织 15 个功能域。依赖方向：**core 端口 ← app 适配器 ← features**；第三方实现（dio、shared_preferences、flutter_secure_storage 等）由 app 层注入。

## 2. 业务 API（Go）

Go module `planstar`，Go 1.26 + Kratos v3，但刻意不引入 proto/grpc，仅用裸 `net/http`。`cmd/planstar/main.go` 是唯一装配点：

- `internal/biz`：领域逻辑 + 仓储端口声明；
- `internal/data`：MySQL 10 个 domain 库 + Redis/Elasticsearch 实现，统一经 `otelsql` 接入 OTel；
- `internal/service`：HTTP handler 适配 biz；
- `internal/server`：recoverer / timeout / bodyLimit / cors / traceHeader 中间件 + 运维健康检查；
- `internal/mq`：RabbitMQ（重试 + DLX + W3C trace 透传）。

依赖倒置清晰：service → biz ← data。

## 3. Admin 运营服务

独立 Go module `planstar/admin`，走 Kratos + AIP + ent + Wire + buf 生成链路。数据边界严格：**只读业务库、只写 `planstar_admin`**；审核与举报动作代理到 planstar 运维 API 而非本地规则。配套 Vue/Vite 控制台经 nginx 部署。

## 4. Next.js 官网

pnpm workspaces + Turborepo + Next.js 15 App Router。`design-tokens` 包与 Flutter `core_design_system` 的 L0/L1 字段一一对应；`api-client` 类型化客户端处理超时、错误、鉴权与金额。后端不可用时楼层独立降级。

## 5. 共享内核

`packages/infras/core`（纯 Dart，零 Flutter）与 `core_design_system`（三层设计令牌）被移动端与桌面端共同引用——这是「全平台一套视觉语言」的工程保证。

## 契约在哪里

API 契约由客户端 `lib/app/network/api_paths.dart` 的静态清单与服务端 handlers 注册路径互为对照；文档与代码存在差异时**以代码为准**。完整索引见[文档中心]({{ '/publications/' | relative_url }})。
---
layout: page
title: Planstar 后端 API
description: Go · Kratos v3 · 单一二进制 · 10 个 MySQL 域库
img: assets/img/planstar/cover-server.svg
importance: 3
category: 服务端
related_publications: false
---

企划星 Flutter 客户端的后端 API 服务：单一 Kratos v3 服务、单一二进制，HTTP 传输直接用 `http.ServeMux` + 原生 `net/http` handler，依赖在 `cmd/planstar/main.go` 手工组装（无 Wire）。

- **数据**：10 个 `planstar_*` MySQL 库（user / catalog / ticket / order / payment / marketing / community / content / meta / shop），统一经 `otelsql` 接入 OTel。
- **中间件**：Redis 会话缓存、验证码与限流；RabbitMQ 领域事件（重试 + DLX + W3C trace 透传）；Elasticsearch 企划读模型与热榜（失败回退 MySQL）。
- **分层**：`biz`（领域逻辑 + 仓储端口）← `service`（HTTP 适配）与 `data`（仓储实现）依赖倒置；`server` 层含 recoverer / timeout / bodyLimit / cors / traceHeader 中间件与运维端口。
- **可观测性**：Consul 注册、Jaeger 追踪、Prometheus 指标、Grafana 面板；运维端口 `/metrics` `/healthz` `/readyz`。
- **本地联调**：`docker-compose.local.yml` 三容器一键启动（MySQL / Redis / API），带演示数据；生产编排零演示数据。

仓库：<https://github.com/uifj/planstar_kratos_server> · 客户端契约见 `docs/api/API_CONTRACT.md`。

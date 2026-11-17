---
layout: page
title: core 与 core_design_system
description: 纯 Dart 内核 + 三层设计令牌 · 移动端与桌面端共享
img: assets/img/planstar/cover-core.svg
importance: 6
category: 基础设施
related_publications: false
---

两个自研 Dart 包，作为 pub workspace 成员被移动客户端与桌面端直接引用：

**`packages/infras/core`** —— 平台无关内核（纯 Dart，零 Flutter，可 `dart test`）：

- `result.dart`：sealed Result / Failure
- `domain.dart`：Entity / AggregateRoot / ValueObject / Money
- `network.dart`：信封 + ApiClient（永不抛）+ Dio 工厂 + 重试拦截器
- `cache.dart`：HTTP 缓存 5 策略 + 带 scope 的缓存键
- `upload.dart`：分片上传 + OSS 表单直传
- `storage.dart` / `config.dart` / `logger.dart`：存储端口、幂等配置加载、可注入日志

**`packages/infras/core_design_system`** —— 三层设计令牌：L0 色板 → L1 语义槽 → L2 ThemeData；Web 端 `design-tokens` 包与其字段一一对应，全平台一套视觉语言。

第三方实现（dio、shared_preferences、flutter_secure_storage 等）一律由 app 组合根注入，内核不依赖任何 Flutter 插件。

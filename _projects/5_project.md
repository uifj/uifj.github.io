---
layout: page
title: Planstar Web 官网
description: Next.js 15 App Router · 与客户端同一套设计令牌
img: assets/img/planstar/cover-web.svg
importance: 5
category: Web
related_publications: false
---

企划星官方网站：**pnpm workspaces + Turborepo + Next.js 15 App Router** 的 Monorepo，视觉与交互严格对齐 Flutter 客户端的设计系统，完整对接后端公开接口。

- **路由**：首页、企划列表/详情、榜单、关于；服务端渲染 + 动态路由 + 反向代理。
- **包结构**：`design-tokens`（L0 色板 / L1 语义色 / 字号 / 间距 / 圆角，与 Flutter `AppColors` 字段同名）、`ui`（无业务组件库）、`api-client`（类型化客户端：超时、错误、鉴权、金额）、`config`（共享 ESLint 规则）。
- **韧性**：后端未启动时页面不崩溃，聚合楼层独立降级为提示条或空状态。
- **质量**：TypeScript strict、Vitest + Testing Library + Playwright，CI 走 lint → typecheck → test → build → e2e。

工程位于工作区 `planstar_web/`（Node ≥ 20.11，pnpm ≥ 9，`pnpm dev` 默认 `http://localhost:3000`）。

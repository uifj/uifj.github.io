---
layout: page
title: Admin 运营后台
description: Kratos + AIP + ent + Wire · 审核与举报运营
img: assets/img/planstar/cover-admin.svg
importance: 4
category: 服务端
related_publications: false
---

独立 Go module `planstar/admin` 的运营服务与配套控制台：

- **生成链路**：Kratos + AIP + ent + Wire + buf（`buf.gen.yaml`、`wire_gen.go`、`*_http.pb.go` 均为生成产物）。
- **数据边界**：只读业务库、只写 `planstar_admin` 运营库；审核与举报动作代理到 planstar 运维 API，而非本地规则。
- **控制台**：Vue/Vite 管理前端，经 nginx 部署；业务 API 内嵌 admin_console HTML 作为兜底入口。
- **部署**：作为生产编排的构建上下文参与部署，与业务 API 同仓不同模块。

仓库：<https://github.com/uifj/planstar_kratos_server>（`admin/` 目录）· 契约见 `docs/api/ADMIN_CONTRACT.md`。

---
layout: page
title: 快速上手
description: 把企划星全栈在本地跑起来：后端、客户端、桌面端与官网。
permalink: /teaching/
nav: true
nav_order: 6
---

以下命令均来自各工程 README，按「后端 → 客户端 → 桌面端 → 官网」的顺序即可在本地跑通完整闭环。

## 1. 后端 API（Docker 三容器一键启动）

```bash
cd planstar_kratos_server/planstar
./up-local.sh
# 或手动：docker compose --env-file .env.local -f docker-compose.local.yml up -d --build
```

本地编排只含 MySQL / Redis / planstar-api 三个容器，自带演示数据；端口默认绑 `127.0.0.1`，真机联调设 `PLANSTAR_LOCAL_BIND=0.0.0.0`。

验证：

```bash
curl -fsS http://127.0.0.1:9108/healthz    # {"status":"ok"}
curl -fsS http://127.0.0.1:9108/readyz     # 依赖就绪时 {"status":"ready"}
curl -fsS 'http://127.0.0.1:8098/v1/activities?pageIndex=1&pageSize=1'
```

面板：Grafana `http://127.0.0.1:3000`、Prometheus `http://127.0.0.1:9090`；全量档位（`COMPOSE_PROFILES=full`）另有 Jaeger / Consul / RabbitMQ 管理台。

## 2. Flutter 移动客户端

```bash
cd flutter_planstar_app
flutter pub get
flutter run --dart-define=PS_API_BASE=http://127.0.0.1:8098/
```

`PS_API_BASE` 为编译期开关，**结尾带 `/`**（未写时客户端自动补）。真机联调时指向本机局域网 IP。

## 3. 桌面日历清单（Windows）

```powershell
cd planstar_desktop_app
flutter pub get
flutter run -d windows          # 开发调试
flutter build windows --release # 发布产物
powershell -NoProfile -ExecutionPolicy Bypass -File windows\installer\install.ps1 -Launch
```

安装到 `%LOCALAPPDATA%\Programs\PlanstarDesktopApp`（用户级，无需管理员权限），重跑脚本即覆盖升级。

## 4. Next.js 官网

```bash
cd planstar_web
pnpm install
cp .env.example .env.local   # 按需修改 PLANSTAR_API_BASE，例如 http://127.0.0.1:8098/
pnpm dev                     # 默认 http://localhost:3000
```

后端未启动时页面不会崩溃：聚合楼层会独立降级为提示条或空状态。

> 更完整的部署、排障与生产化说明见各仓库 `docs/` 与[文档中心]({{ '/publications/' | relative_url }})。
---
layout: page
title: 企划星 Flutter 客户端
description: 投票决策类应用 · Clean DDD + Riverpod + GoRouter
img: assets/img/planstar/cover-client.svg
importance: 1
category: 客户端
related_publications: false
---

「企划星」移动客户端：以「做项目前由网友投票」为核心机制，用户化身**星推官**，对游戏创作、自媒体、小说创作、周边同人等分类的企划选择**通过 / 驳回**并写下审批理由。

工程为 monorepo + Clean DDD 重构：`lib/features/<name>` 按领域垂直切分 15 个功能域（auth / catalog / discover / goods / group_buy / home / mall / marketing / message / order / project_idea / proxy_buy / search / user 等），公共 UI 集中在 `ps_*` 组件；依赖方向为 core 端口 ← app 适配器 ← features。

**核心闭环：立项前投票 → 立项后支持**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/planstar/03-project-idea.png" title="企划 · 审批叠卡" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/planstar/13-project-idea-detail.png" title="立项前 · 创意详情" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/planstar/12-project-detail.png" title="立项后 · 回报档位" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    星推官审批叠卡、创意详情（支持率）与企划详情（达成率与回报档位）。
</div>

**浏览与发现**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/planstar/01-home.png" title="首页" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/planstar/02-discover.png" title="发现 · 动态瀑布流" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/planstar/18-ranking.png" title="企划榜单" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    首页精选推荐、发现瀑布流与热度/达成/冲刺三榜。截图采自 Android 16 真机 · 1200×2670 · zh-CN，连接 MySQL 真实种子数据的本地后端。
</div>

- 仓库：<https://github.com/uifj/flutter_planstar_app>
- 版本：1.0.1+1001 · Flutter 3.41.9 / Dart 3.11.5
- 自研包：`packages/infras/core`（纯 Dart 内核）与 `core_design_system`（三层设计令牌）
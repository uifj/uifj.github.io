---
layout: about
title: 企划星
permalink: /
subtitle: 企划星 · 让每一个创意先被看见，再被支持。

profile:
  align: right
  image: https://avatars.githubusercontent.com/uifj
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>企划支持平台 · 投票决策类应用</p>
    <p>维护者：<a href="https://github.com/uifj">@uifj</a></p>
    <p>客户端 · 桌面端 · 服务端 · 官网</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

**企划星（planstar）** 是一款以「做项目前由网友投票」为核心机制的投票决策类应用。应用内的决策项目被称为**企划**，涵盖游戏创作、自媒体、小说创作、周边同人等多个分类。「企划」页显示多条实时更新的企划审批，用户可以化身**星推官**，选择**通过 / 驳回**并写下审批理由。

把创作理念、创作内容、创作目标发布为企划的过程，其实也是在厘清自己的创作思路。企划星就像一条让人「保持行动、即时反馈」的通道——在发起企划、接受支持的过程中，创作的动力往往更加持久；陌生人常常能补上作者从没想过的角度，还有热心用户会为企划找出「问题」。

## 一个闭环，两段旅程

- **立项前 · 投票决策**：星推官对创意投票，只表达态度与理由，**不扣星币**。发布企划的过程，也是帮创作者厘清思路的过程。
- **立项后 · 支持交付**：创作者设置回报档位，用户用资金支持企划落地，并获得周边、内容或参与权益。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/planstar/03-project-idea.png" title="企划 · 星推官审批叠卡" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/planstar/13-project-idea-detail.png" title="立项前 · 创意详情与支持率" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/planstar/12-project-detail.png" title="立项后 · 企划详情与回报档位" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    核心闭环：星推官审批叠卡 → 立项前创意详情 → 立项后企划详情。截图采自 Android 16 真机（1200×2670 · zh-CN），连接真实种子数据的本地后端，非设计稿。
</div>

## 产品矩阵

| 端 | 工程 | 技术栈 |
| --- | --- | --- |
| 移动客户端 | [flutter_planstar_app](https://github.com/uifj/flutter_planstar_app) | Flutter · Clean DDD · Riverpod · GoRouter，15 个功能域 |
| 桌面日历清单 | [planstar_desktop_app](https://github.com/uifj/planstar_desktop_app) | Flutter Windows · 原生通知 · 多窗口 · 托盘 · 农历 |
| 业务 API | [planstar_kratos_server](https://github.com/uifj/planstar_kratos_server) | Go · Kratos v3 · MySQL ×10 · Redis · RabbitMQ · Elasticsearch |
| 运营后台 | planstar_kratos_server/admin | Kratos + ent + Wire · 审核与举报代理 |
| 官方网站 | planstar_web | Next.js 15 · React 19 · Tailwind CSS v4 · Turborepo |

移动端与桌面端共享同一套 `core`（纯 Dart 内核）与 `core_design_system`（三层设计令牌），Web 端设计令牌与 Flutter 端一一对应——全平台一套视觉语言。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/planstar/01-home.png" title="首页 · 快捷入口与精选推荐" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/planstar/18-ranking.png" title="企划榜单 · 热度/达成/冲刺" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/planstar/08-mall.png" title="星币商城 · 余额与兑换档位" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    首页、企划榜单与星币商城。完整 19 页真机画廊见客户端仓库 docs/screenshots/。
</div>

想了解产品口径与术语对照，请读[产品定位]({{ '/publications/' | relative_url }})；想本地跑起来，请看[快速上手]({{ '/teaching/' | relative_url }})。
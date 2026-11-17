---
layout: post
title: 立项前投票，立项后支持：企划星的产品机制
date: 2026-10-08 10:00:00+0800
description: 为什么投票不扣星币？为什么回报档位在立项之后？拆解企划星「一个闭环、两段旅程」的设计。
tags: product
categories: planstar
---

企划星的产品口径是**企划支持平台**。很多人第一次听到「投票决策类应用」会以为是众筹或打赏，但企划星把一件事拆成了前后两段：**投票决策**与**支持交付**。

## 立项前：投票只表达态度与理由

应用内的决策项目被称为**企划**，涵盖游戏创作、自媒体、小说创作、周边同人等分类。「企划」页实时滚动多条企划审批，用户化身**星推官**，选择**通过 / 驳回**并写下审批理由。

这一段**不扣星币**。原因很直接：

- 投票的价值在于**态度与理由**，而不是金额。让陌生人零成本地补足作者没想过的角度、为企划找出「问题」；
- 发布企划的过程本身就在帮创作者厘清思路——把创作理念、内容、目标写清楚，本身是一次创作推演；
- 企划星想做一条「保持行动、即时反馈」的通道：发起企划、接受审视的过程中，创作动力往往更持久。

## 立项后：回报档位与资金支持

企划通过审批立项后，创作者设置**回报档位**，用户用资金支持企划落地，并获得周边、内容或参与权益。此时「支持」才与金钱挂钩，因为创作者已经给出了可交付的承诺。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/planstar/13-project-idea-detail.png" title="立项前 · 创意详情与支持率" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/planstar/12-project-detail.png" title="立项后 · 达成率与回报档位" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    同一个企划的两段旅程：立项前看支持率，立项后看达成率与回报档位。
</div>

## 术语对照

| 术语 | 含义 |
| --- | --- |
| 企划 | 应用内的决策项目，分立项前（创意）与立项后两种状态 |
| 星推官 | 参与审批投票的用户 |
| 星币 | 应用内货币；立项前投票不消耗，星币商城可兑换 |
| 回报档位 | 立项后创作者设置的资金支持档位与对应权益 |

定位、品类边界与术语对照的唯一事实源是后端仓库的 `docs/product/POSITIONING.md`，本站[文档中心]({{ '/publications/' | relative_url }})有索引。
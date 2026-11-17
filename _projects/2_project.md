---
layout: page
title: 企划星桌面日历清单
description: Flutter Windows 桌面端 · 与移动端共享内核与设计令牌
img: assets/img/planstar/cover-desktop.svg
importance: 2
category: 客户端
related_publications: false
---

基于旧版桌面日历应用完整重写的 Flutter Windows 桌面端：**完全复用** `packages/infras/core`（领域原语 / Result / 存储端口 / 配置 / 日志 / 网络 / 事件总线）与 `core_design_system`（三层设计令牌、亮/暗主题），不引入第二套颜色、字号或状态管理方案。

- **架构**：Clean DDD + 六边形架构，插件只出现在 infrastructure 与 bootstrap 层，经 `overrideWithValue` 注入；Presentation 只读 Riverpod。
- **桌面能力**：`flutter_local_notifications` 原生通知、`desktop_multi_window` 多窗口、`tray_manager` 托盘、开机自启、农历（lunar）、ChillRoundGothic 字体、全项目 Lucide 图标。
- **安装**：用户级安装器（无需管理员权限），写入开始菜单/桌面快捷方式与 HKCU 卸载项，重跑脚本即覆盖升级；`flutter build windows --release` 产物约 32 MB。

仓库：<https://github.com/uifj/planstar_desktop_app>
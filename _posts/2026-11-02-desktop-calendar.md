---
layout: post
title: 企划星桌面日历清单：同一套内核，第二种形态
date: 2026-11-02 10:00:00+0800
description: Flutter Windows 桌面端重写完成：原生通知、多窗口、托盘、农历，与移动端共享 core 与设计令牌。
tags: desktop release
categories: planstar
---

企划星桌面日历清单的 Flutter Windows 重写版完成构建验证（`flutter build windows` 通过），并提供用户级安装器。

## 不引入第二套方案

桌面端**完全复用**移动端的两个自研包：

- `packages/infras/core`：领域原语 / sealed Result / 存储端口 / 配置加载 / 日志 / 网络 / 事件总线；
- `packages/infras/core_design_system`：三层设计令牌与亮/暗主题。

不引入任何第二套颜色、字号或状态管理方案——全平台一套视觉语言。

## 架构分层

Clean DDD + 六边形架构：Flutter 插件只出现在 `lib/infrastructure` 与 `lib/bootstrap`，经 `overrideWithValue` 注入；Presentation 层只读 Riverpod，Application 层是 Notifier 与用例，Domain 层是纯 Dart 聚合、值对象与端口。

## 桌面能力

- `flutter_local_notifications`：Windows 原生通知（安装器写入 `System.AppUserModel.ID` 保证可用）；
- `desktop_multi_window` 多窗口、`tray_manager` 托盘、开机自启；
- 农历（lunar）、ChillRoundGothic 字体、全项目 Lucide 图标。

## 安装与升级

```powershell
flutter build windows --release
powershell -NoProfile -ExecutionPolicy Bypass -File windows\installer\install.ps1 -Launch
```

安装到 `%LOCALAPPDATA%\Programs\PlanstarDesktopApp`（约 32 MB Release 产物），无需管理员权限；重跑脚本即覆盖升级并自动停止旧实例。卸载走系统「应用和功能」，默认保留用户数据。

仓库：<https://github.com/uifj/planstar_desktop_app>
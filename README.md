# uifj.github.io · 企划星 planstar 官网

企划星（planstar）的 GitHub Pages 站点：以「做项目前由网友投票」为核心机制的企划支持平台。
基于 [al-folio](https://github.com/alshedivat/al-folio) Jekyll 主题。

## 站点结构

| 页面         | 内容                                             | 数据源                     |
| ------------ | ------------------------------------------------ | -------------------------- |
| 首页（关于） | 产品定位、核心闭环、真机截图、产品矩阵           | `_pages/about.md`          |
| 博客         | 产品机制、架构笔记、发布记录、Godot 学习笔记     | `_posts/`                  |
| 产品矩阵     | 客户端 / 桌面端 / 服务端 / Admin / 官网 / 基础包 | `_projects/`               |
| 代码仓库     | GitHub 主页与企划星仓库卡片                      | `_data/repositories.yml`   |
| 产品档案     | 定位、矩阵、里程碑、技术栈                       | `_data/cv.yml`             |
| 快速上手     | 后端 / 客户端 / 桌面端 / 官网本地运行命令        | `_pages/teaching.md`       |
| 文档中心     | 产品口径、API 契约、架构文档索引                 | `_bibliography/papers.bib` |
| 更多内容     | 读书笔记 / 每月总结 / 高效工具                   | `_books/`                  |

品牌资源：favicon `assets/img/planstar.svg`，项目封面与真机截图在 `assets/img/planstar/`。
首页头像直接使用维护者的 GitHub 头像链接（`https://avatars.githubusercontent.com/uifj`）。

## 本地开发

```bash
bundle install
bundle exec jekyll serve
```

需要 Ruby + Bundler；响应式图片依赖 ImageMagick（见 `_config.yml` 的 `imagemagick` 段）。
部署走 GitHub Pages（al-folio 官方 Actions 工作流）。

## 内容事实源

站点内容整理自 Planstar 工作区各工程 README 与 docs：
`flutter_planstar_app`、`planstar_desktop_app`、`planstar_kratos_server`（含 `admin/`）、`planstar_web`。
文档与代码存在差异时以代码为准。

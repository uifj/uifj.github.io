// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-企划星",
    title: "企划星",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-博客",
          title: "博客",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-产品矩阵",
          title: "产品矩阵",
          description: "企划星全栈工程：移动客户端、桌面端、服务端、运营后台、官网与共享基础包。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-代码仓库",
          title: "代码仓库",
          description: "企划星全栈工程的 GitHub 仓库与贡献者主页，数据维护在 `_data/repositories.yml`。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-产品档案",
          title: "产品档案",
          description: "企划星的产品定位、矩阵、里程碑与技术栈。内容维护在 `_data/cv.yml`。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-快速上手",
          title: "快速上手",
          description: "把企划星全栈在本地跑起来：后端、客户端、桌面端与官网。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-读书笔记",
              title: "读书笔记",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-每月总结",
              title: "每月总结",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/reports/";
              },
            },{id: "dropdown-高效工具",
              title: "高效工具",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tools/";
              },
            },{id: "post-你好-企划星-planstar",
        
          title: "你好，企划星 planstar！",
        
        description: "本站正式升级为企划星（planstar）官网：一个让人「保持行动、即时反馈」的企划支持平台。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hello-planstar/";
          
        },
      },{id: "post-企划星-flutter-客户端-1-0-1-发布",
        
          title: "企划星 Flutter 客户端 1.0.1 发布",
        
        description: "四个主 Tab、星推官审批闭环与 19 页 Android 真机画廊——全部来自真实种子数据，非设计稿。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/flutter-1-0-1/";
          
        },
      },{id: "post-企划星桌面日历清单-同一套内核-第二种形态",
        
          title: "企划星桌面日历清单：同一套内核，第二种形态",
        
        description: "Flutter Windows 桌面端重写完成：原生通知、多窗口、托盘、农历，与移动端共享 core 与设计令牌。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/desktop-calendar/";
          
        },
      },{id: "post-立项前投票-立项后支持-企划星的产品机制",
        
          title: "立项前投票，立项后支持：企划星的产品机制",
        
        description: "为什么投票不扣星币？为什么回报档位在立项之后？拆解企划星「一个闭环、两段旅程」的设计。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/vote-then-support/";
          
        },
      },{id: "post-企划星全栈架构总览-五个可构建单元",
        
          title: "企划星全栈架构总览：五个可构建单元",
        
        description: "Flutter 客户端、Go 业务 API、Admin 运营服务、Next.js 官网与共享内核——彼此只靠 HTTP 契约耦合。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/fullstack-architecture/";
          
        },
      },{id: "post-最佳实践案例",
        
          title: "最佳实践案例",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E6%A1%88%E4%BE%8B/";
          
        },
      },{id: "post-依赖注入的最佳实践",
        
          title: "依赖注入的最佳实践",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/";
          
        },
      },{id: "post-又开始幻想了-恼",
        
          title: "又开始幻想了“恼”！",
        
        description: "幻想之作",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E5%8F%88%E5%BC%80%E5%A7%8B%E5%B9%BB%E6%83%B3%E4%BA%86-%E6%81%BC/";
          
        },
      },{id: "post-手册学习之最佳实践",
        
          title: "手册学习之最佳实践",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E6%89%8B%E5%86%8C%E5%AD%A6%E4%B9%A0%E4%B9%8B%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/";
          
        },
      },{id: "post-gdscript依赖注入实践",
        
          title: "GDScript依赖注入实践",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/GDScript%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5/";
          
        },
      },{id: "post-gdscript使用小技巧",
        
          title: "GDScript使用小技巧",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/GDScript%E4%BD%BF%E7%94%A8%E5%B0%8F%E6%8A%80%E5%B7%A7/";
          
        },
      },{id: "post-手册学习之常用节点",
        
          title: "手册学习之常用节点",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/%E6%89%8B%E5%86%8C%E5%AD%A6%E4%B9%A0%E4%B9%8B%E5%B8%B8%E7%94%A8%E8%8A%82%E7%82%B9/";
          
        },
      },{id: "books-读书笔记方法",
          title: '读书笔记方法',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/00%20%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%E6%96%B9%E6%B3%95/";
            },},{id: "books-the-godfather",
          title: '《The Godfather》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/010%20%E3%80%8AThe%20Godfather%E3%80%8B/";
            },},{id: "books-洋葱阅读法",
          title: '《洋葱阅读法》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/01%E3%80%8A%E6%B4%8B%E8%91%B1%E9%98%85%E8%AF%BB%E6%B3%95%E3%80%8B/";
            },},{id: "books-60分钟高效阅读",
          title: '《60分钟高效阅读》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/02%20%E3%80%8A60%E5%88%86%E9%92%9F%E9%AB%98%E6%95%88%E9%98%85%E8%AF%BB%E3%80%8B/";
            },},{id: "books-让时间陪你慢慢变富",
          title: '《让时间陪你慢慢变富》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/03%20%E3%80%8A%E5%AE%9A%E6%8A%95%E6%94%B9%E5%8F%98%E5%91%BD%E8%BF%90%E3%80%8B/";
            },},{id: "books-微信互联网平民创业",
          title: '《微信互联网平民创业》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/04%E3%80%8A%E5%BE%AE%E4%BF%A1%E4%BA%92%E8%81%94%E7%BD%91%E5%B9%B3%E6%B0%91%E5%88%9B%E4%B8%9A%E3%80%8B/";
            },},{id: "books-自学是门手艺",
          title: '《自学是门手艺》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/05%20%E3%80%8A%E8%87%AA%E5%AD%A6%E6%98%AF%E9%97%A8%E6%89%8B%E8%89%BA%E3%80%8B/";
            },},{id: "books-把时间当做朋友",
          title: '《把时间当做朋友》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/06%20%E3%80%8A%E6%8A%8A%E6%97%B6%E9%97%B4%E5%BD%93%E5%81%9A%E6%9C%8B%E5%8F%8B%E3%80%8B/";
            },},{id: "books-我也有话要说",
          title: '《我也有话要说》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/07%20%E3%80%8A%E6%88%91%E4%B9%9F%E6%9C%89%E8%AF%9D%E8%A6%81%E8%AF%B4%E3%80%8B/";
            },},{id: "books-小狗钱钱",
          title: '《小狗钱钱》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/08%20%E3%80%8A%E5%B0%8F%E7%8B%97%E9%92%B1%E9%92%B1%E3%80%8B/";
            },},{id: "books-开窍",
          title: '《开窍》',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/09%20%E3%80%8A%E5%BC%80%E7%AA%8D%E3%80%8B/";
            },},{id: "news-产品口径确立为企划支持平台-立项前星推官投票不扣星币-立项后设置回报档位接受资金支持",
          title: '产品口径确立为企划支持平台：立项前星推官投票不扣星币，立项后设置回报档位接受资金支持。',
          description: "",
          section: "News",},{id: "news-企划星桌面日历清单上线-windows-用户级安装器-原生通知-多窗口-托盘与农历-复用移动端同一套设计令牌",
          title: '企划星桌面日历清单上线 Windows 用户级安装器：原生通知、多窗口、托盘与农历，复用移动端同一套设计令牌。',
          description: "",
          section: "News",},{id: "news-企划星-flutter-客户端-1-0-1-发布-四个主-tab-星推官审批闭环-附-19-页-android-真机画廊",
          title: '企划星 Flutter 客户端 1.0.1 发布：四个主 Tab、星推官审批闭环，附 19 页 Android 真机画廊。',
          description: "",
          section: "News",},{id: "projects-企划星-flutter-客户端",
          title: '企划星 Flutter 客户端',
          description: "投票决策类应用 · Clean DDD + Riverpod + GoRouter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-企划星桌面日历清单",
          title: '企划星桌面日历清单',
          description: "Flutter Windows 桌面端 · 与移动端共享内核与设计令牌",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-planstar-后端-api",
          title: 'Planstar 后端 API',
          description: "Go · Kratos v3 · 单一二进制 · 10 个 MySQL 域库",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-admin-运营后台",
          title: 'Admin 运营后台',
          description: "Kratos + AIP + ent + Wire · 审核与举报运营",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-planstar-web-官网",
          title: 'Planstar Web 官网',
          description: "Next.js 15 App Router · 与客户端同一套设计令牌",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-core-与-core-design-system",
          title: 'core 与 core_design_system',
          description: "纯 Dart 内核 + 三层设计令牌 · 移动端与桌面端共享",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

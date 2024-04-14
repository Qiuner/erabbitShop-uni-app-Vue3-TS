## 这是一个学习项目 原项目地址是 https://gitee.com/Megasu/uniapp-shop-vue3-ts/

我将写项目遇到的各种问题都弄到了这个博客上 欢迎观看
https://blog.csdn.net/qq_61654952?type=blog

https://blog.csdn.net/qq_61654952/article/details/137704990?spm=1001.2014.3001.5502

## 项目简介

小兔鲜儿项目包含从首页浏览商品，商品详情，微信登录，加入购物车，提交订单，微信支付，订单管理等功能。

当前仓库为小兔鲜儿的**项目模板**。

### 技术栈

- 前端框架：[uni-app](https://uniapp.dcloud.net.cn/) (Vue3 + TS + Setup)
- 状态管理：[pinia](https://pinia.vuejs.org/zh/)
- 组件库：[uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

## 资料说明

### 📀 视频学习

[https://www.bilibili.com/video/BV1Bp4y1379L/](https://www.bilibili.com/video/BV1Bp4y1379L/?share_source=copy_web&vd_source=2ac50d29193927b3c8597537dc4bc81d)

### 📗 接口文档

[https://www.apifox.cn/apidoc/shared-0e6ee326-d646-41bd-9214-29dbf47648fa/](https://www.apifox.cn/apidoc/shared-0e6ee326-d646-41bd-9214-29dbf47648fa/)

### ✏️ 在线笔记

[https://megasu.gitee.io/uni-app-shop-note/](https://megasu.gitee.io/uni-app-shop-note/)

### 📦 项目源码

[https://gitee.com/Megasu/uniapp-shop-vue3-ts/](https://gitee.com/Megasu/uniapp-shop-vue3-ts/)

## 运行程序

1. 安装依赖

```shell
# npm
npm i --registry=https://registry.npmmirror.com

# pnpm
pnpm i --registry=https://registry.npmmirror.com
```

2. 运行程序

```shell
# 微信小程序端
npm run dev:mp-weixin

# H5端
npm run dev:h5

# App端
需 HbuilderX 工具，运行 - 运行到手机或模拟器
```

3. 微信开发者工具导入 `/dist/dev/mp-weixin` 目录

### 工程结构解析

```
├── .husky                     # Git Hooks
├── .vscode                    # VS Code 插件 + 设置
├── dist                       # 打包文件夹（可删除重新打包）
├── src                        # 源代码
│   ├── components             # 全局组件
│   ├── composables            # 组合式函数
│   ├── pages                  # 主包页面
│       ├── index               # 首页
│       ├── category            # 分类页
│       ├── cart                # 购物车
│       ├── my                  # 我的
│       └── login               # 登录页
│   ├── services               # 所有请求
│   ├── static                 # 存放应用引用的本地静态资源的目录
│       ├── images              # 普通图片
│       └── tabs                # tabBar 图片
│   ├── stores                 # 全局 pinia store
│       ├── modules             # 模块
│       └── index.ts            # store 入口
│   ├── styles                 # 全局样式
│       └── fonts.scss          # 字体图标
│   ├── types                  # 类型声明文件
│       └── component.d.ts      # 全局组件类型声明
│   ├── utils                  # 全局方法
│   ├── App.vue                # 入口页面
│   ├── main.ts                # Vue初始化入口文件
│   ├── pages.json             # 配置页面路由等页面类信息
│   ├── manifest.json          # 配置appid等打包信息
│   └── uni.scss               # uni-app 内置的常用样式变量
├── .editorconfig              # editorconfig 配置
├── .eslintrc.cjs              # eslint 配置
├── .prettierrc.json           # prettier 配置
├── .gitignore                 # git 忽略文件
├── index.html                 # H5 端首页
├── package.json               # package.json 依赖
├── tsconfig.json              # typescript 配置
└── vite.config.ts             # vite 配置
```

```
erabbit-uni-app-vue3-ts
├─ .editorconfig
├─ .eslintrc.cjs
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-babc5dd249f3d1b69a2b1e59a7c9c23a393790d8.idx
│  │     └─ pack-babc5dd249f3d1b69a2b1e59a7c9c23a393790d8.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .husky
│  └─ pre-commit
├─ .prettierrc.json
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ components
│  │  └─ .gitkeep
│  ├─ composables
│  │  └─ .gitkeep
│  ├─ env.d.ts
│  ├─ main.ts
│  ├─ manifest.json
│  ├─ pages
│  │  ├─ cart
│  │  │  └─ cart.vue
│  │  ├─ category
│  │  │  └─ category.vue
│  │  ├─ index
│  │  │  └─ index.vue
│  │  ├─ login
│  │  │  └─ login.vue
│  │  └─ my
│  │     └─ my.vue
│  ├─ pages.json
│  ├─ services
│  │  └─ .gitkeep
│  ├─ static
│  │  ├─ images
│  │  │  ├─ blank.png
│  │  │  ├─ blank_cart.png
│  │  │  ├─ bubble.png
│  │  │  ├─ car.png
│  │  │  ├─ center_bg.png
│  │  │  ├─ locate.png
│  │  │  ├─ logo.png
│  │  │  ├─ logo_icon.png
│  │  │  ├─ navigator_bg.png
│  │  │  ├─ order_bg.png
│  │  │  ├─ rating_off.png
│  │  │  ├─ rating_on.png
│  │  │  ├─ remove.png
│  │  │  └─ stars.png
│  │  └─ tabs
│  │     ├─ cart_default.png
│  │     ├─ cart_selected.png
│  │     ├─ category_default.png
│  │     ├─ category_selected.png
│  │     ├─ home_default.png
│  │     ├─ home_selected.png
│  │     ├─ user_default.png
│  │     └─ user_selected.png
│  ├─ stores
│  │  ├─ index.ts
│  │  └─ modules
│  │     └─ member.ts
│  ├─ styles
│  │  └─ fonts.scss
│  ├─ types
│  │  └─ component.d.ts
│  ├─ uni.scss
│  └─ utils
│     └─ .gitkeep
├─ tsconfig.json
└─ vite.config.ts

```

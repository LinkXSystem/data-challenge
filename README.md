# Visualization Blog 项目

> 简述：尝试可视化来设计博客项目，通过 multi-page 来划分不同的页面承载不同的功能模块

## 文件目录

```sh
.
|-- config
|   |-- config.js # 自定义 multi-page 的配置
|   |-- env.js # 更新，自定义配置
|   |-- jest
|   |   |-- cssTransform.js
|   |   `-- fileTransform.js
|   |-- multi.js # 配置 multi-page 的通用方法
|   |-- paths.js
|   |-- webpack.config.dev.js # 更新，自定义配置
|   |-- webpack.config.prod.js # 更新，自定义配置
|   `-- webpackDevServer.config.js
|-- deplay.sh # 部署脚本
|-- Dockerfile
|-- nginx.conf # nginx 配置
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|   `-- manifest.json
|-- README.md
|-- scripts
|   |-- build.js
|   |-- start.js
|   `-- test.js
|-- src
|   |-- api
|   |   `-- data-mock.js
|   |-- assets
|   |   |-- font
|   |   |-- images
|   |   `-- scss
|   |-- components # 通用组件库
|   |   |-- affix
|   |   |-- anchor
|   |   |-- back-top
|   |   |-- canvas
|   |   |-- draggable
|   |   |-- icon
|   |   |-- markdown
|   |   |-- modal
|   |   |-- motion
|   |   |-- qrcode
|   |   |-- steps
|   |   |-- tabs
|   |   |-- __tests__
|   |   |-- timeline
|   |   `-- upload
|   |-- config # 项目环境变量统一配置
|   |   `-- env.js
|   |-- lib # 项目通用基础库
|   |   |-- axios.js
|   |   `-- classes.js
|   |-- README.md
|   `-- views
|       |-- introduce
|       `-- system
|-- test
|   |-- App.js
|   `-- App.test.js
`-- yarn.lock
```

## 功能模块

- 通用组件库

```sh
components
|-- affix
|-- anchor
|-- back-top
|-- canvas
|-- draggable
|-- icon
|-- markdown
|-- modal
|-- motion
|-- qrcode
|-- steps
|-- tabs
|-- timeline
`-- upload
```

- 页面配置

```sh
views
|-- introduce
`-- system
```

- 通用基础库

```sh
lib
|-- axios.js
`-- classes.js
```

# Vue

## 前言

::: warning
Vite 需要 [Node.js](https://nodejs.org/en/) 版本 18+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当包管理器发出警告时，请注意升级 Node 版本。
:::

## 环境准备

如果电脑未安装[Node.js](https://nodejs.org/en/)，请安装它

验证

```
// 出现相应npm版本即可
npm -v
// 出现相应node版本即可
node -v
```

## 安装 `<Badge type="tip" text="^3.4.14" />`

```
pnpm create vite
```

此时面临的选项

```
?Project name: >> vite-project	// 构建项目名称
?Select a framework: » - Use arrow-keys. Return to submit.	// 选择一个框架
    Vanilla
>   Vue
    React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others
? Select a variant: » - Use arrow-keys. Return to submit.	// 选择一个变量
>   TypeScript
    JavaScript
    Customize with create-vue ↗
    Nuxt ↗

```

即将完成

进入项目根目录后 安装依赖包

```
pnpm install
```

大功告成 🎉

输入命令以启动项目

```
pnpm run dev
```

## 工具配置

使用的开发工具是[VS Code](https://code.visualstudio.com/)(推荐)，可以安装以下工具来提高开发效率及代码格式化

- [ Chinese (Simplified) (简体中文) ]
- [ HTML CSS Support ]
- [ JavaScript (ES6) code snippets ]
- [ Prettier ]
- [ Path Intellisense ]
- [ Image preview ]
- [ ESLint ]
- [ GitLens ]
- [ Live Server ]
- [ Tabnine AI ]
- [ TypeScript Vue Plugin (Volar) ]
- [ Vue 3 Snippets ]
- [ Vue Language Features (Volar) ]
- [ Vue 3 Snippets ]
- [ Vetur ]

## 插件推荐

图表库

- [ECharts](https://echarts.apache.org/zh/index.html "一个基于 JavaScript 的开源可视化图表库")

组件库

- [Element-ui](https://element.eleme.cn/#/zh-CN "基于Vue2 面向设计师和开发者的组件库")
- [Element-Plus](https://element-plus.gitee.io/zh-CN/ "基于Vue3 面向设计师和开发者的组件库")
- [remixicon](https://remixicon.cn/ "简单令人愉快的图标系统")

请求库

- [Axios](https://www.javasoho.com/axios/index.html "一个基于 promise 的 HTTP 库")

媒体库

- [EasyPlayer](http://open.tsingsee.com/sdk/easyplayer/ "一款流媒体播放器系列项目")

3D 库（ WebGL ）

- [Cesium](https://cesium.com/ "3D 地理空间平台")
- [three.js
  ](http://www.webgl3d.cn/ "基于原生WebGL封装运行的三维引擎库")
- [orillusion](https://www.orillusion.com/ "次时代 WebGPU 引擎")

跨平台

- [Elector](https://electronjs.p2hp.com/ "构建跨平台桌面应用程序")

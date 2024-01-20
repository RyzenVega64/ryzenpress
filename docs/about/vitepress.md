# 开始

### **先决条件**

* [Node.js](https://nodejs.org/) 版本 18 或更高版本。
* 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的文本编辑器

*VitePress可以安装到现有项目中 亦可以单独使用*

使用以下命令进行安装：

```javascript
pnpm install -D vitepress
```

此时 项目结构如下

```javascript
- node_modules
- package.json
- pnpm-lock.yaml
```

在根目录运行以下命令：

```
pnpm vitepress init
```

此时面临的选项

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?	// VitePress应该在哪里初始化配置
│  ./docs
│
◇  Site title:	// 部署完成后的标题
│  RyzenVega64
│
◇  Site description:	// 部署完成后的标题
│  A VitePress Site
│
◇  Theme:	// theme标题选择 这里选择第一项 默认标题
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
│
◇  Use TypeScript for config and theme fi1es?	// 是否使用Ts构建网站
│  ○ Yes / ● No
│
◇  Add VitePress npm scripts to package.json?	// 是否添加进package.json
│  ● Yes / ○ No
└
```

大功告成 🎉

现在 可以输入以下命令启动项目了

```
pnpm run docs:dev
```

# 部署

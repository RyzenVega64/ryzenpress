# VitePress

## **先决条件**

- [Node.js](https://nodejs.org/) 版本 18 或更高版本。
- 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的文本编辑器

::: tip
VitePress 可以安装到现有项目中 亦可以单独使用
:::

## 安装

```javascript
pnpm install -D vitepress
```

此时 项目结构如下

```javascript
-node_modules - package.json - pnpm - lock.yaml;
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
◇  Theme:	// theme标题选择 这里选择第二项 默认+自定义主题
│  ○ Default Theme (Out of the box, good-looking docs)
│  ● Default Theme + Customization
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

## 构建&部署

> 目前免费托管网站比较多 如 [Vercel](https://vercel.com/home) 、[Zeabur](https://zeabur.com/zh-CN)、[Netlify](https://app.netlify.com/)
>
> 这里选择 [Vercel](https://vercel.com/home) 进行部署 并使用 [GitHub](https://github.com/) 进行代码托管

### 创建仓库

进入 [GitHub](https://github.com/) 创建代码仓库

### 提交代码

在根目录下 创建 .gitignore 文件 便于更好过滤 node_modules 依赖包

.gitignore

```
node_modules
```

执行 Git 命令 把代码推送到仓库

```
// 初始化项目
git init

// 添加所有文件到暂存区
git add *

// 提交所有文件
git commit -m "first commit"

// 重命名当前分支
git branch -M main

// 关联远程仓库
git remote add origin <远程仓库地址>

// 推送
git push -u origin main
```

### 部署项目

使用存在 VitePress 项目的 [GitHub](https://github.com/) 账号登录 [Vercel](https://vercel.com/home) 以授权

::: tip

以下方法无需本地打包即可部署

与官网部署方式有较大出入 但更简便易懂

如部署完毕后 后续需要修改 则直接 Git 推送至仓库即可

:::

[Import 导入仓库](https://vercel.com/new)

在 Configure Project <项目配置>中

修改 Build Command 项

> 自动构建时打包命令
>
> 如果以 npm 或 yarn 构建 则需做适当修改

```
pnpm docs:build
```

修改 Output Directory 项

> 定位打包后文件目录
>
> 在第一步安装时 配置文件设置了在 docs/ 目录下 而非默认根目录 如果设置其他目录 则需做适当修改
>
> dist 为默认打包文件名

```
docs/.vitepress/dist
```

Deploy 开始部署吧！

## 使用建议

Markdown 是一种轻量级标记语言,。 它允许人们使用易读易写的纯文本格式编写文档,然后转换成有效的 HTML 文档。

仔细看目录结构 你会发现 默认的页面是由 Markdown 构成 你只需要配置路径 即可使 Markdown 展示到页面中 美观且优雅

::: tip
建议使用 [Typora ](https://typora.io/)编写 Markdown 文档

VS Code 编译 Markdown 文件建议安装 [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) 、 [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
:::

> 以下不再描述如何使用 如何配置 社区文档浅显易懂 这里只做技巧分享
>
> - [vitepress 中文网](https://vitepress.qzxdp.cn/)
> - [vitepress 官方文档](https://vitepress.dev/)
>
> 如果看到这里还不明白 那就访问我的 [GitHub](https://github.com/RyzenVega64/ryzenpress) 项目仓库 拉到本地后运行 配置文件备注非常详细

### 自定义容器

输入

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

输出

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

亦可以通过修改配置项来自定义容器标题名称

```ja
// 自定义容器标题
export default defineConfig({
 markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "注意",
      detailsLabel: "详细",
    },
  },
})

```

### 突出代码块中某一行

输入

````javascript
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
````

输出

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### 高亮代码语法

VitePress 使用 [Shikiji](https://github.com/antfu/shikiji)（[Shiki](https://shiki.matsu.io/) 的改进版本）来突出显示 Markdown 代码块中的语言语法，使用彩色文本。Shiki 支持多种编程语言。您需要做的就是将有效的语言别名附加到代码块的开头反引号

````
```js
export default {
  name: 'MyComponent',
  // ...
}
````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
````

输出

```js
export default {
  name: "MyComponent",
  // ...
};
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

### 使用 emoji

[所有表情均可使用](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)

输入

```
:tada: :100:
```

输出

🎉 💯

### 代码组

输入

```
::: code-group
```config.js
export default {
  // ...
}

```config.ts
export default {
  // ...
}
:::
```

输出
::: code-group

```config.js
const config = {
  // ...
}

export default config
```

```config.ts
const config: UserConfig = {
  // ...
}

export default config
```

:::

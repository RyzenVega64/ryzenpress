# 翻译

简言

> 项目中难免会有涉外部分 在写过的项目中还真不少见
>
> 对于项目大类 可以分为国外用户使用 、 完全国外项目
>
> 对于翻译大类 可以分为全局翻译、点对点翻译
>
> 有两套方案 目前比较流行（其实俩一块用才是最屌的

## i18n

不必多说  但凡涉及到翻译  必定有它身影  点对点翻译  笨拙且实用

逻辑简单零碎

1. 创建 / 导入语言包
2. 把语言包内数据进行解构赋值
3. 在全局引入挂载
4. 通过本地 localStorage 中的参数判断本地语种为 zh 或 en 进行翻译

以 Vue2 项目 中英切换为例

安装

```
pnpm install vue-i18n
```

在合适的地方创建 i18n 文件夹

在该文件夹内分别创建 zh.js / en.js / index.js

zh.js

```javascript
export default {
    i18Ntxt: {
      username: '用户名',
      password: '密码',
    }
}
```

en.js

```javascript
export default {
    i18Ntxt: {
      username: 'username',
      password: 'password',
    }
}
```

index.js

::: info
这里引入了element的语言包 如不需要 可删
:::

```javascript
import Vue from 'vue'
import store from '@/store'
import VueI18n from 'vue-i18n'
import elEn from 'element-ui/lib/locale/lang/en'
import elZh from 'element-ui/lib/locale/lang/zh-CN'
import en from './en'
import zh from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...en,
    ...elEn,
  },
  zh: {
    ...zh,
    ...elZh,
  },
}


const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'zh', // 设置语种
  messages, // 设置全局当地语言包,
})
export default i18n

```

main.js

```javascript
//导入语言包
import i18n from './i18n'

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
```

组件使用

```javascript
{{$t('密码')}}  // password
```

## translate.js

该方案为自动翻译  特别适合多语种环境

| 优点                      | 缺点                                                    |
| ------------------------- | ------------------------------------------------------- |
| 使用简单 直接引入使用即可 |                                                         |
| 瞬时翻译 使用了缓存预加载 | DOM不刷新 DOM内容刷新时 不会自动翻译 最好配合 i18n 使用 |
| 自动翻译 自动匹配本地语种 |                                                         |
| 利于SEO 对搜索引擎友好    | 正因为利于SEO 假设中译英 获取DOM节点的时候还是中文      |

安装

```
npm i i18n-jsautotranslate
```

main.js

```javascript
import translate from 'i18n-jsautotranslate'
translate.setUseVersion2() //设置使用v2.x 版本
translate.selectLanguageTag.show = false //是否显示切换栏
translate.listener.start() //监控页面动态渲染的文本进行自动翻译
Vue.prototype.$translate = translate
```

使用

在 localStorage 里存入一个 val  根据 val 去判断要切换的语种

```javascript
<div @click="languageAuto()"> 一键翻译 </div>

data() {
  return {
    language: zh,
  }
},

// 翻译
languageAuto() {
  this.language == 'zh' ? (this.language = 'en') : (this.language = 'zh')
  localStorage.setItem('language', `{"language":"${this.language}"}`)
  if (this.language == 'zh') {
    console.log('转为中文')
    this.$translate.changeLanguage('chinese_simplified')
  }
  if (this.language == 'en') {
    console.log('转为英文')
    this.$translate.changeLanguage('english')
  }
  this.$translate.execute() //进行翻译
},
```

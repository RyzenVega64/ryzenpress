# Cesium

简言

> 做大屏可视化时偶然了解到该技能，小众但炫酷
>
> 需要有一定建模、数学、三维空间能力水准

## Vite+Vue3+TS 安装

### 申请 Cesium Token

进入Cesium 注册账号

[cesium](https://ion.cesium.com/signin)

> 离谱的是 E宝 (Epic) 居然可以快捷登录？！

登录后点击导航栏的 Access Token 再右侧即可看到默认Token

### 安装&引入

```
# Cesium pnpm
pnpm install cesium

# 如果项目同时存在Three.js 需避免使用pnpm Three.js对pnpm + ts的组合并不友好
npm i cesium
```

依赖包安装完毕后 需要在 public 文件夹内创建一个引用文件夹  这里命名为libs

将 node_modules / cesium / Build / Cesium 中的 Assets、ThirdParty、Widgets、Workers 引入到刚刚创建好的libs文件夹内

```
public/
│
├── libs/
│   ├── Assets
│   └── ThirdParty
│   └── Widgets
│   └── Workers
```

在main.ts中 引入

```
// 引入cesium
import { Ion } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
Ion.defaultAccessToken = "第一步申请的Access Token"
window.CESIUM_BASE_URL = '/libs';
```

### 组件使用

::: danger

当浏览器报如下错误时 应当把代码中 infoBox 参数修改为 false ，这里默认为false

```
Blocked script execution in 'about:blank' because the document's frame is sandboxed and the 'allow-scripts' permission is not set.
```

:::

```typescript
<template>
  <!-- 作为cesium的容器 -->
  <div class="conter" ref="conter"></div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import * as Cesium from "cesium";

// 获取cesium元素
const conter = ref();
onMounted(() => {
  // 判断是否获取到元素
  if (conter) {
    // 初始化cesium场景
    const viewer = new Cesium.Viewer(conter.value, {
      infoBox: false,
    });
    // 打印创建的viewer在控制台中
    console.log(viewer);
  }
});
</script>

<style lang="scss" scoped>
// 给容器一个宽高 以16/9展示
.conter {
  width: 70%;
  aspect-ratio: 16/9;
}
</style>

```

<script setup>
import orillusion from '../component/orillusion.vue'
</script>

# Orillusion

简言

> 如同 Three.js
>
> 同样是对 WebGL 封装的第三方库
>
> 更好用 更快

## Vite+Vue3 安装

### 安装&引入

```
pnpm install @orillusion/core --save
```

### 组件使用

> 这里引入

```javascript
<template>
  <div class="canvasView">
    <canvas class="canvas" ref="canvasRef"></canvas>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  View3D,
  HoverCameraController,
  AtmosphericComponent,
  UIImage,
  BitmapTexture2D,
  makeAloneSprite,
  WorldPanel,
  GPUCullMode,
} from "@orillusion/core";

// 获取画布元素
const canvasRef = ref(null);

onMounted(() => {
  orInit();
});

const orInit = async () => {
  // 初始化引擎
  await Engine3D.init({
    canvasConfig: {
      canvas: canvasRef.value, // 指定 canvas 元素, 可以自定义管理 canvas 大小或布局
      alpha: true, // 是否背景透明, 默认 false
      zIndex: 1, // CSS z-index, 默认 0
      // backgroundImage: "path/to/bg", // 若 alpha 透明时的背景图片
      devicePixelRatio: 1 // 渲染 DPR, 默认使用 window.devicePixelRatio
    },
  });
  // 创建新的场景作为根节点
  let scene3D = new Scene3D();
  // 添加大气天空盒，获得基本环境光
  let sky = scene3D.addComponent(AtmosphericComponent);
  // 隐藏天空盒
  sky.enable = true;
  // 创建相机
  let cameraObj = new Object3D();
  let camera = cameraObj.addComponent(Camera3D);
  // 调整相机视角
  camera.perspective(60, Engine3D.aspect, 1, 5000.0);
  // 设置相机控制器
  let controller = cameraObj.addComponent(HoverCameraController);
  controller.setCamera(0, 0, 150); // 从右到左  // 从上到下  // 距离
  // 添加相机节点
  scene3D.addChild(cameraObj);

  let view = new View3D();
  view.scene = scene3D;
  view.camera = camera;
  Engine3D.startRenderView(view);

  // 创建面板根节点
  let panelRoot = new Object3D();
  let panel = panelRoot.addComponent(WorldPanel);
  panel.cullMode = GPUCullMode.none;
  panelRoot.localScale.set(0.1, 0.1, 0.1);
  let canvas = view.enableUICanvas();
  canvas.addChild(panelRoot);

  // 加载一个 BitmapTexture2D
  let bitmapTexture2D = new BitmapTexture2D();
  bitmapTexture2D.flipY = true;
  await bitmapTexture2D.load("/logo.jpg");

  // 创建图像节点
  let imageQuad = new Object3D();
  panelRoot.addChild(imageQuad);
  // 创建图像组件
  let image = imageQuad.addComponent(UIImage);
  // 设置图像大小
  image.uiTransform.resize(50, 50);
  // 设置图像源
  image.sprite = makeAloneSprite("webgpu", bitmapTexture2D);
  // 销毁图片
  // image.destroy();
};
</script>

<style lang="scss" scoped>
.canvasView {
  width: 100%;
  aspect-ratio: 16/9;
  .canvas {
    height: 100%;
    width: 100%;
  }
}
</style>

```

### 演示

一张图片在三维场景中的应用
<orillusion />

<script setup>
import three from '../component/three.vue'
</script>

# Three.js

简言

> 做大屏可视化时偶然了解到该技能，小众但炫酷
>
> 需要有一定建模、数学、三维空间能力水准

## Vite+Vue3 安装

### 安装&引入

```
pnpm install three
pnpm install @types/three
```

### 组件使用

> 这里引入的 home.glb 模型文件 路径在 public / model 目录下

```typescript
<template>
  <div class="conter">
    <div id="threeView" class="threeView"></div>
    <span class="schedule" v-show="showSchedule">{{
      "模型加载进度：" + value
    }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

let scene: any,
  camera: any,
  renderer: any,
  controls: any,
  dracoLoader: any,
  gltfLoader: any;

const getThreeViewWidth = ref<number>(0);
const getThreeViewHeight = ref<number>(0);

const value = ref<String>("0");
const showSchedule = ref(true);

onUnmounted(() => {
  // 在组件卸载时清理资源
  if (renderer) renderer.dispose();
});

onMounted(() => {
  const threeView = document.getElementById("threeView");
  if (threeView) {
    getThreeViewWidth.value = threeView.clientWidth;
    getThreeViewHeight.value = threeView.clientHeight;
  }
  initThree();
  render();
  // 将渲染器的画布插入到页面中
  document.getElementById("threeView")?.appendChild(renderer.domElement);
});

const initThree = () => {
  // 初始化场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xeeeeee); // 设置背景颜色为白色

  // 初始化相机
  camera = new THREE.PerspectiveCamera(
    75,
    getThreeViewWidth.value / getThreeViewHeight.value,
    0.1,
    1000
  );
  camera.position.set(0, 5, 0);
  camera.updateProjectionMatrix();

  // 初始化渲染器
  renderer = new THREE.WebGLRenderer({
    antialias: true, // 开启抗锯齿
  });
  renderer.setSize(getThreeViewWidth.value, getThreeViewHeight.value); // 设置渲染器的尺寸与窗口大小一致
  document.body.appendChild(renderer.domElement); // 将渲染器的画布插入到页面中
  renderer.outputEncoding = THREE.sRGBEncoding; // 设置色调映射
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;
  renderer.shadowMap.enabled = true; // 开启阴影
  renderer.physicallyCorrectLights = true;

  // 初始化控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(-8, 2, 0);
  controls.enableDamping = true;

  // 初始化模型加载器
  dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath("./draco/");

  gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);

  // 加载模型
  gltfLoader.load(
    "/model/home.glb",
    (gltf) => {
      const model = gltf.scene;
      model.traverse((child: any) => {
        if (child.name === "Plane") {
          child.visible = false;
        }
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      scene.add(model);
    },
    // 加载过程中的回调函数
    function (xhr) {
      // 监听计算加载进度
      const percent = (Math.floor(xhr.loaded) / 4443176) * 100;
      if (String(percent.toFixed(2)) === "100.00") {
        showSchedule.value = false;
      } else {
        value.value = String(percent.toFixed(2));
      }
    }
  );

  // 设置灯光
  initLight();
};

const initLight = () => {
  // 添加平行光
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 50, 0);
  scene.add(light);
};

const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
};
</script>

<style lang="scss" scoped>
.conter {
  position: relative;
}
.threeView {
  width: 100%;
  aspect-ratio: 16/9;
}
.schedule {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #666;
}
</style>

```

### 演示

AR 极简主义
<three />

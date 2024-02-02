<template>
    <!-- 作为cesium的容器 -->
    <div class="conter" ref="conter">
        <span>放弃了... </span>
        <p>cesium 对Vite + Vue3 + TS + pnpm 的支持实在是太差  准确来说是对 Vite 完全不支持</p>
        <p>效果能实现 本地能跑 一到打包就寄...</p>
    </div>
  </template>
  <script lang="ts" setup>
//   import { onMounted, ref } from "vue";
//   import * as Cesium from "cesium";
  
//   // 获取cesium元素
//   const conter = ref();
//   onMounted(() => {
//     // 判断是否获取到元素
//     if (conter) {
//       console.log(conter);
//       cInit();
//     }
//   });
//   const cInit = async () => {
//     // 初始化cesium场景
//     const viewer = await new Cesium.Viewer(conter.value, {
//       infoBox: false,
//     });
//     // 打印创建的viewer在控制台中
//     console.log(viewer);
//   };
  </script>
  
  <!-- <style lang="scss" scoped>
  // 给容器一个宽高
  .conter {
    width: 70%;
    aspect-ratio: 16/9;
  }
  </style>
   -->
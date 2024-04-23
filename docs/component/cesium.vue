<template>
  <!-- 作为cesium的容器 -->
  <!-- <div class="container" ref="container"></div> -->
  <p> 正在实现以 SSR 渲染 Cesium 以便实现更快加载速度 </p>
</template>
<script setup>
// import { onMounted, ref } from "vue";
// import { Cesium } from 'cesium';
// // import "./css/main.css";

// // 获取cesium元素
// const container = ref();
// onMounted(() => {
//   // 判断是否获取到元素
//   if (container) {
//     cInit();
//   }
// });
// const cInit = async () => {
//   console.log("调用");
//   Cesium.Ion.defaultAccessToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNjU1ZjE5YS1lMjY5LTRhMWMtODQ4YS1lNGM1ZTI4NDBjMWMiLCJpZCI6MTkwNjkzLCJpYXQiOjE3MDU2NDI1ODB9.7800xGHVpoqKM0jk0HNAen7C90JWo2kQbKLaAlBeVmg";

//   console.log("初始化");
//   // 初始化cesium场景
//   const viewer = new Cesium.Viewer(container.value, {
//     infoBox: false,
//   });
//   // 打印创建的viewer在控制台中
//   console.log(viewer);
// };
</script>

<style lang="scss" scoped>
// 给容器一个宽高
.container {
  width: 100%;
  aspect-ratio: 16/9;
}
</style>

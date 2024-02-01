<template>
  <!-- 作为cesium的容器 -->
  <div class="conter" ref="conter"></div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import * as Cesium from "cesium";

// 获取cesium元素
const conter = ref();
onMounted(() => {
  // 判断是否获取到元素
  if (conter) {
    console.log(conter);
    cInit();
  }
});
const cInit = async () => {
  // 初始化cesium场景
  const viewer = await new Cesium.Viewer(conter.value, {
    infoBox: false,
  });
  // 打印创建的viewer在控制台中
  console.log(viewer);
};
</script>

<style scoped>
.conter {
  width: 100%;
  aspect-ratio: 16/9;
}
</style>

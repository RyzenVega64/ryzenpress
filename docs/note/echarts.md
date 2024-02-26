<script setup>
import echarts from '../component/echarts.vue'
</script>

# ECharts

简言

> 在接触数据孪生、智慧城市、大屏可视化时，免不了要接触各式各样的图表，使用过程中各式各样的问题也会随之而来。

## 图表自适应

为了解决在不同设备中 因分辨率、比例不同 导致的样式兼容性问题

这里为了减轻浏览器渲染负载 使用防抖优化性能 触发多次重绘操作以最后一次为准

在项目合适位置创建 echartsResize.js

```javascript
// 防抖函数
export default function debounce(fn, delay) {
  let timer = null;

  return function () {
    // 获取函数的作用域和变量
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
```

组件

```javascript
// 引用
import chartResize from '@/utils/echartsResize'

mounted() {
    // 监听浏览器窗口变化
    window.addEventListener('resize', this.handleResize)
},

beforeDestroy() {
    // 销毁监听事件
    window.removeEventListener('resize', this.handleResize)
},
methods: {
    // echarts防抖重绘
    handleResize: chartResize(function () {
        // 重绘
        this.charts.resize()
    }, 300),
}
```

## 热力图 Bug

ECharts 版本 <Badge type="tip" text="^5.3.2" />

<echarts />
在渲染数据时 某些地方总是少一块

似乎是因为 Canvas 渲染问题导致 切换为 Svg 渲染解决

```javascript{2}
let myChart = echarts.init(chartDom, null, {
    renderer: "svg", // 设置渲染方式为 SVG
});
```

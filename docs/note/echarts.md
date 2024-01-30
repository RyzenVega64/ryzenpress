# ECharts

简言

> 在接触数据孪生、智慧城市、大屏可视化时，免不了要接触各式各样的图表，使用过程中各式各样的问题也会随之而来。

## 图表自适应

这里为了减轻浏览器渲染负载 使用防抖优化性能  触发多次重绘操作以最后一次为准

在项目合适位置创建 echartsResize.js

```
// 防抖函数
export default function debounce(fn, delay) {
  let timer = null
 
  return function () {
    // 获取函数的作用域和变量
    const context = this
    const args = arguments
 
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
```

组件

```
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

ECharts版本  <Badge type="tip" text="^5.3.2" />

![foo](/about/echarts1.png)

似乎是因为Canvas渲染问题导致 虽切换为svg渲染解决 但该问题始终存在

代码示例

```
let chartDom = document.getElementById("main");
let myChart = echarts.init(chartDom, null, {
    renderer: "svg", // 设置渲染方式为 SVG
});
```

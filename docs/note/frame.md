# 框架

## Vue

### params 和 query 的区别

query：必须使用路由路径进行跳转，其携带的参数会直接显示在路由上，安全性较低，类似于get请求

params：必须使用组件名进行跳转，携带的参数不会显示在路由上，比较安全，类似于post请求

### Vue-router 和 localtion.href 跳转区别

Vue-router是Vue官方提供的路由管理器 localtion.href是浏览器对象提供的属性 使用 diff 算法，实现异步按需加载，减少 dom 操作

Vue-router使用push路径跳转页面不更新，localtion.href页面会刷新 同步加载

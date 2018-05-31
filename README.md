# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 遇到的问题及解决方法
* 支持less
>   安装less less-loader style-loader
>   <style lang="less" scoped>
    webpack.base.conf.js
   {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
        include: []
    }
* 在style里导入less文件
>    include: []
>    @import './style/common';

* 去掉eslint
> config -> index.js 注释useEslint: true

* 固定定位出现随窗口滚动
> 横向溢出会出现这个问题


## vue
* 动态class
> :class="{'active': tabActive === 'msite'}"
> 格式 对象的形式 第一个参数 类名， 第二个参数：boolean值
* 绑定事件，传递参数
> @click="tabClick('home')"

* 路由 
> router-link
> 路由激活有router-link-active class
> 访问路由 this.$route
> 设置路由 this.$router.push('/')
> 每次进入路由

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
>    <style lang="less" scoped>
    webpack.base.conf.js
    {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
        include: []
    }
* 在style里导入less文件
>    include: []
    @import './style/common';
  

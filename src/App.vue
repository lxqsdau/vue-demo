<template>
  <div class="vue-demo">
    <router-link to="/one">one</router-link>
    <router-link to="/two">two</router-link>
    <router-view></router-view>
    <div id="footer-wrapper">
      <section>
        <div>外卖</div>
      </section>
      <section>
        <div>搜索</div>
      </section>
      <section>
        <div>订单</div>
      </section>
      <section>
        <div>我的</div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less" scoped>
  @import './style/common';
  #footer-wrapper {
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    section {
      flex: 1;
    }
  }
</style>

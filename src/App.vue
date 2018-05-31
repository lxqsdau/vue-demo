<template>
  <div class="vue-demo">
  <header class="header">头部</header>
    <router-view></router-view>
    <div id="footer-wrapper">
      <router-link to="/home">
        <section>
          <span>首页</span>
        </section>
      </router-link>
      <router-link to="/search">
        <section>
          <span>搜索</span>
        </section>
      </router-link>
      <router-link to="/order">
        <section>
          <span>订单</span>
        </section>
      </router-link>
      <router-link to="/my">
        <section>
          <span>我的</span>
        </section>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
  beforeMount() {
    console.log('渲染前')
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
  @import './style/common';
  .header {
    height: 40px;
    background: #3190e8;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 200;
  }
  #footer-wrapper {
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    height: 50px;
    a {
      flex: 1;
      line-height: 50px;
      section {
        text-align: center;
      }
      &.router-link-active {
        section {
          color: #3190e8;
        }
      }
    }
  }
</style>

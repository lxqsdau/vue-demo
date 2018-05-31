import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../pages/home/home';
// import Search from '../pages/search/search';
// import Order from '../pages/order/order';
// import My from '../pages/my/my';

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home');
const Search = r => require.ensure([], () => r(require('../pages/search/search')), 'Search');
const Order = r => require.ensure([], () => r(require('../pages/order/order')), 'Order');
const My = r => require.ensure([], () => r(require('../pages/my/my')), 'My');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/my',
      name: 'My',
      component: My,
    },
  ],
});
/**
 * require.ensure 单独打包，按需加载
 * https://www.cnblogs.com/fantasy-zxf/p/6760390.html
 */

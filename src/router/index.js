import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Foo = { template: '<div>one</div>' };
const Bar = { template: '<div>two</div>' };

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Foo,
    },
    {
      path: '/one',
      name: 'one',
      component: Foo,
    },
    {
      path: '/two',
      name: 'Two',
      component: Bar,
    },
  ],
});

import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Index from '../components/pages/Index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../components/pages/Index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

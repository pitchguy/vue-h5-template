import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export const router = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home/index'), // 路由懒加载
    meta: {
      title: '首页', // 页面标题
      keepAlive: false, // keep-alive 标识
    },
  },
  {
    path: '/404',
    name: 'error404',
    component: () => import('@/views/error/404'),
    meta: { title: '404页面', keepAlive: false },
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({ y: 0 }),
    routes: router,
  });

export default createRouter();

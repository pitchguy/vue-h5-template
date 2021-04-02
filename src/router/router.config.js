/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
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

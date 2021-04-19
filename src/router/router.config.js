/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'index-page',
    redirect: '/home',
    component: () => import('@/components/NavLayout'),
    children: [
      {
        path: '/antv',
        name: 'antv',
        component: () => import('@/views/antv'),
        meta: {
          title: '图表页',
          keepAlive: false,
        },
      },
      {
        path: '/pageTurn',
        name: 'pageTurn',
        component: () => import('@/views/pageTurn'),
        meta: {
          title: '翻页demo',
          keepAlive: false,
        },
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    meta: {
      title: '功能介绍页', // 页面标题
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

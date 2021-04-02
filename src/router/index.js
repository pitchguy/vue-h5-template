import Vue from 'vue';
import Router from 'vue-router';
import { Notify } from 'vant';
import { constantRouterMap } from './router.config.js';
import { _local } from '@/utils';

// hack router push callback
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

const createRouter = () =>
  new Router({
    mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap,
  });

const router = createRouter();

// 有需要登陆认证的话 在vuex store中存值，进行判断
router.beforeEach((to, from, next) => {
  // const isLogin = _local.get('token');
  // if (!isLogin && to.path !== '/regist-login') {
  //   _local.clear();
  //   Notify({ type: 'primary', message: '请先进行登录注册！' });
  //   return next({ path: '/regist-login' });
  // }
  next();
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

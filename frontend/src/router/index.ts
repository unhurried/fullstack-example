import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Login from '../views/Login.vue';
import Index from '../views/Index.vue';
import Create from '../views/Create.vue';
import Update from '../views/Update.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login, meta: { requiresLogin: false } },
  { path: '/', component: Index, meta: { requiresLogin: true } },
  { path: '/create', component: Create, meta: { requiresLogin: true } },
  { path: '/update/:userId', component: Update, meta: { requiresLogin: true } },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !store.getters['auth/isLogin']) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;

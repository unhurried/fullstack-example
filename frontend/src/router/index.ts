import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Login from '../views/Login.vue';
import TodoIndex from '../views/todo/Index.vue';
import TodoList from '../views/todo/List.vue';
import TodoCreate from '../views/todo/Create.vue';
import TodoUpdate from '../views/todo/Update.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: { name: 'todo/list' } },
  { path: '/login', component: Login, meta: { requiresLogin: false } },
  {
    path: '/todo',
    component: TodoIndex,
    children: [
      { name: 'todo/list', path: '', component: TodoList, meta: { requiresLogin: true } },
      { name: 'todo/create', path: 'create', component: TodoCreate, meta: { requiresLogin: true } },
      { name: 'todo/update', path: 'update/:userId', component: TodoUpdate, meta: { requiresLogin: true } },
    ],
  },
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

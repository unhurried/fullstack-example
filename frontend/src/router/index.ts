import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Create from '../views/Create.vue';
import Update from '../views/Update.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index },
  { path: '/create', component: Create },
  { path: '/update/:userId', component: Update },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

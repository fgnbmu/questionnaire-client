import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from './components/Main.vue';
import Creating from './components/Creating.vue';
import Completing from './components/Completing.vue';
import Surveys from './components/Surveys.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Main },
  { path: '/creating', component: Creating },
  { path: '/completing', component: Completing},
  { path: '/surveys', component: Surveys}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
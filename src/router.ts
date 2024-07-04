import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from './components/MainPage.vue';
import CreatingState from './components/CreatingState.vue';
import CompletingState from './components/CompletingState.vue';
import EditingState from './components/EditingState.vue';
import ListOfSurveys from './components/ListOfSurveys.vue';
import ListOfSurveysAdmin from './components/ListOfSurveysAdmin.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: MainPage },
  { path: '/creating', component: CreatingState },
  { path: '/completing', component: CompletingState},
  { path: '/editing', component: EditingState},
  { path: '/surveys', component: ListOfSurveys},
  { path: '/surveysAdmin', component: ListOfSurveysAdmin}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
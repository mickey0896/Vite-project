import { createRouter, createWebHistory } from "vue-router";
// import Navbar from "../components/Navbar.vue"
// import TestPinia from "../components/TestPinia.vue"
import Demo from "../components/demo.vue";
import Demo2 from "../components/demo2.vue";

const routes = [
  { path: "/demo", name: "demo", component: Demo },
  { path: "/demo2", name: "demo2", component: Demo2 },
  // {path: '/page', component: TestPinia},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

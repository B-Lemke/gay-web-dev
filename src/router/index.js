import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portfolio.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Gallery.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  /* Default/404 */
  {
    path: "/404",
    alias: "/:pathMatch(.*)*",
    name: "404",
    component: () =>
      import(
        /*webpackChunkName: "NotFound" */
        "../views/404.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

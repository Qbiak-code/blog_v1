import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: 'Home Page - Example App',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: {
      title: "Misia's Blog"
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "Misia's Blog"
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

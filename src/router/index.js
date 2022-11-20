import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (Contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactView.vue"),
    },    
    {
      path: "/page/:id",
      name: "page",
      // route level code-splitting
      // this generates a separate chunk (Page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PageView.vue"),
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      // route level code-splitting
      // this generates a separate chunk (Privacy.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PrivacyView.vue"),
    },

    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: NotFound 
    }    
  ],
});

export default router;

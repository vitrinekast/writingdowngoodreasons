import "./styles/_style.scss";
import { ViteSSG } from "vite-ssg";

import App from "./App.vue";
const routes = [
  {
    path: "/chapter-1",
    name: "Chapter 1",
    component: () => import("./pages/Chapter1.vue"),
  },

  {
    path: "/chapter-2",
    name: "Chapter 2",
    component: () => import("./pages/Chapter2.vue"),
  },
  {
    path: "",
    name: "start",
    component: () => import("./pages/Start.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: () => import("./pages/404.vue"),
  },
];

export const createApp = ViteSSG(App, {
  base: import.meta.env.BASE_URL,
  routes,
});

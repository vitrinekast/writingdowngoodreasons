import { ViteSSG } from "vite-ssg";
import "./styles/_style.scss";

import App from "./App.vue";


const routes = [
  {
    path: "/chapter-1",
    name: "Chapter 1",
    component: () => import("./pages/Chapter1.vue"),
    meta: { transition: 'chapter-1' },
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
    path: "/test1",
    name: "test1",
    component: () => import("./pages/testy1.vue"),
  },
  {
    path: "/test2",
    name: "test2",
    component: () => import("./pages/testy2.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: () => import("./pages/404.vue"),
  },
];



export const createApp = ViteSSG(
  App,
  { routes }
)
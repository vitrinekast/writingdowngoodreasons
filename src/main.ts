import { ViteSSG } from "vite-ssg";
import "./styles/_style.scss";
import { createPinia } from 'pinia'

import App from "./App.vue";
const pinia = createPinia()


const routes = [
  {
    path: "/chapter-1/page-1",
    name: "Chapter 1",
    component: () => import("./pages/Chapter1/Page1.vue"),
    meta: { transition: 'chapter-1' },
  },
  {
    path: "/chapter-1/page-2",
    name: "Chapter 1 Page 2",
    component: () => import("./pages/Chapter1/Page2.vue"),
  },
  {
    path: "/chapter-1/page-3",
    name: "Chapter 1 Page 3",
    component: () => import("./pages/Chapter1/Page3.vue"),
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



export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(pinia)
  },
)
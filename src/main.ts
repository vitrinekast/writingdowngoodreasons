import "./styles/_style.scss";
import Vue from "vue";
import { ViteSSG } from "vite-ssg";
import VueDeviceDetect from '@tenrok/vue-device-detect'

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



export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, initialState }) => {
    console.log(app);
    app.use(VueDeviceDetect)
  },
)
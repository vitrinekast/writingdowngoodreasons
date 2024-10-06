import { createPinia } from 'pinia';
import { ViteSSG } from "vite-ssg";
import "./styles/_style.scss";

import Particles from "@tsparticles/vue3";
import App from "./App.vue";
const pinia = createPinia()

import { loadFull } from 'tsparticles';

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
    app.use(pinia);
    app.use(Particles, {
      init: async engine => {
        // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
        await loadFull(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
      },
    });
  },
)
import "./styles/_style.scss";

import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Test from "./pages/Test.vue";
import Chapter1 from "./pages/Chapter1.vue";
import Chapter2 from "./pages/Chapter2.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/chapter/1", component: Chapter1 },
    { path: "/chapter/2", component: Chapter2 },
    { path: "/test", component: Test }
  ],
});

const app = createApp(App);

app.use(router);
app.config.errorHandler = (err) => {
  console.error("Error in main.ts: ", err);
}

app.mount("#app");

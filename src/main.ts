import "./styles/_style.scss";
import { ViteSSG } from 'vite-ssg'


import App from "./App.vue";
import Test from "./pages/Test.vue";
import Chapter1 from "./pages/Chapter1.vue";
import Chapter2 from "./pages/Chapter2.vue";


const routes =  [
  { path: "/chapter-1", component: Chapter1 },
  // { path: "/chapter/2", component: Chapter2 },
  { path: "/test", component: Test }
]

// // `export const createApp` is required instead of the original `createApp(App).mount('#app')`
// export const createApp = ViteSSG(
//   // the root component
//   App,
//   // vue-router options
//   { routes },
//   // function to have custom setups
//   ({ app, router, routes, isClient, initialState }) => {
//     // install plugins etc.
//   },
// )

export const createApp = ViteSSG(App, {
  base: import.meta.env.BASE_URL,
  routes,
})
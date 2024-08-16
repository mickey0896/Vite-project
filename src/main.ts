import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routers/index.ts";

// const pinia = createPinia()
const add = createApp(App);

add.use(createPinia());
add.use(router);
add.mount("#app");

// Locator
// import setupLocatorUI from "@locator/runtime";
// if (process.env.NODE_ENV === "development") {
//   setupLocatorUI({
//     adapter: "vue"
//   });
// }

// createApp(App).use(pinia).mount('#app')

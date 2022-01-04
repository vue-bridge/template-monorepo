import { createApp } from "vue";
import AppVue from "./App.vue";
import { install as Plugin } from "../src/main";

createApp(AppVue).use(Plugin).mount("#app");

import Vue from "vue";
import AppVue from "./App.vue";
import { install as Plugin } from "../src/main";

Vue.use(Plugin);
new Vue(AppVue).$mount("#app");

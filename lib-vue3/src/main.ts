import MyInput from "./components/MyInput.vue";
import type { App } from "@vue-bridge/runtime";
export { MyInput };

export function install(app: App) {
  app.component(MyInput.name!, MyInput);
}

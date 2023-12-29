import { VueConstructor } from "vue";
import { bus, preloadApp, destroyApp, setupApp } from "@rickx/wujie";

declare const WujieVue: {
  bus: typeof bus;
  setupApp: typeof setupApp;
  preloadApp: typeof preloadApp;
  destroyApp: typeof destroyApp;
  install: (Vue: VueConstructor) => void;
};

export default WujieVue;

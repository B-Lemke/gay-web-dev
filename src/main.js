import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// Font Awesome imports

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { svgSpritePlugin } from "vue-svg-sprite";

library.add(fas, fab);

// Create vue app
createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(router)
  .use(svgSpritePlugin, {
    url: "@/assets/images/homepage/sprites.svg",
    class: "drawing-sprites",
  })
  .use(createPinia())
  .mount("#app");

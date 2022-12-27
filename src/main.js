import { createApp } from "vue";
import App from "./App"
import router from "./router";

import "@fortawesome/fontawesome-free/js/all";

createApp(App).use(router).mount("#app");

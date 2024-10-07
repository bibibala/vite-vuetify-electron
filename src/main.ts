import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "./plugins/vuetify";
import "./assets/style/bar.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Vuetify);

app.mount("#app");

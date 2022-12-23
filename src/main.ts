import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Toast from "vue-toastification";
import ConfigurationView from "./views/ConfigurationView.vue";
import HeroView from "./views/HeroView.vue";
import PartyView from "./views/PartyView.vue";
import RandomizerView from "./views/RandomizerView.vue";
import TrackerView from "./views/TrackerView.vue";

import "../node_modules/@vueform/multiselect/themes/tailwind.css";
import "./assets/main.css";
import "vue-toastification/dist/index.css";

const pinia = createPinia();

const routes = [
  { path: "/", name: "Home", component: RandomizerView },
  {
    path: "/configuration",
    name: "Configuration",
    component: ConfigurationView,
  },
  { path: "/party", name: "Party", component: PartyView },
  { path: "/hero/:id", name: "Hero", component: HeroView },
  { path: "/tracker", name: "Tracker", component: TrackerView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Toast, { timeout: 3000 });

app.mount("#app");

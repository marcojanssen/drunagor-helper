import App from "@/App.vue";
import "@/assets/main.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { loadLanguage } from "@/language";
import { i18n } from "@/i18n";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/lara-dark-green/theme.css";
import "primeicons/primeicons.css";

const pinia = createPinia();

const routes = [
  { path: "/", name: "Home", component: () => import("@/views/RandomizerView.vue") },
  {
    path: "/configuration",
    name: "Configuration",
    component: () => import("@/views/ConfigurationView.vue"),
  },
  { path: "/party", redirect: "/campaign" },
  { path: "/campaign/:id", name: "Campaign", component: () => import("@/views/CampaignView.vue") },
  { path: "/campaign/:campaignId/hero/:heroId", name: "Hero", component: () => import("@/views/HeroDetailView.vue") },
  {
    path: "/campaign/:campaignId/hero/:heroId/sequential-state",
    name: "HeroSequentialState",
    component: () => import("@/components/CampaignHeroSequentialAdventure.vue"),
  },
  { path: "/campaign", name: "Campaign Overview", component: () => import("@/views/CampaignOverviewView.vue") },
  { path: "/keyword", name: "Keyword", component: () => import("@/views/KeywordView.vue") },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

async function startApp() {
  const app = createApp(App);

  app.use(i18n);
  app.use(pinia);
  app.use(router);
  app.use(PrimeVue, { ripple: true });
  app.use(ToastService);

  await loadLanguage("en_US");

  const configurationStore = ConfigurationStore();
  await loadLanguage(configurationStore.enabledLanguage);

  app.mount("#app");
}

startApp();

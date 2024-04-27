import App from "@/App.vue";
import "@/assets/main.css";
import CampaignOverviewView from "@/views/CampaignOverviewView.vue";
import CampaignView from "@/views/CampaignView.vue";
import ConfigurationView from "@/views/ConfigurationView.vue";
import KeywordView from "@/views/KeywordView.vue";
import RandomizerView from "@/views/RandomizerView.vue";
import InitiativeView from "@/views/InitiativeView.vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import HeroDetailView from "@/views/HeroDetailView.vue";
import CampaignHeroSequentialAdventure from "@/components/CampaignHeroSequentialAdventure.vue";
import Vue3TouchEvents from "vue3-touch-events";

const pinia = createPinia();

const routes = [
  { path: "/", name: "Home", component: RandomizerView },
  {
    path: "/configuration",
    name: "Configuration",
    component: ConfigurationView,
  },
  { path: "/party", redirect: "/campaign" },
  { path: "/campaign/:id", name: "Campaign", component: CampaignView },
  { path: "/campaign/:campaignId/hero/:heroId", name: "Hero", component: HeroDetailView },
  {
    path: "/campaign/:campaignId/hero/:heroId/sequential-state",
    name: "HeroSequentialState",
    component: CampaignHeroSequentialAdventure,
  },
  { path: "/campaign", name: "Campaign Overview", component: CampaignOverviewView },
  { path: "/keyword", name: "Keyword", component: KeywordView },
  { path: "/initiative", name: "Initiative", component: InitiativeView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Toast, { timeout: 3000 });
app.use(Vue3TouchEvents);

app.mount("#app");

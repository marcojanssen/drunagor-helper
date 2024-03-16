import App from "@/App.vue";
import "@/assets/main.css";
import CampaignOverviewView from "@/views/CampaignOverviewView.vue";
import CampaignView from "@/views/CampaignView.vue";
import ConfigurationView from "@/views/ConfigurationView.vue";
import KeywordView from "@/views/KeywordView.vue";
import RandomizerView from "@/views/RandomizerView.vue";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import HeroDetailView from "@/views/HeroDetailView.vue";
import CampaignHeroSequentialAdventure from "@/components/CampaignHeroSequentialAdventure.vue";

import * as enUS from '@/locales/en_US.json'
import * as deDE from '@/locales/de_DE.json'

const pinia = createPinia();

const messages = {
  'en-us': {
    ...enUS
  },
  'de-de': {
    ...deDE
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en-us', // set locale
  fallbackLocale: 'en-us', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(router);
app.use(Toast, { timeout: 3000 });

app.mount("#app");

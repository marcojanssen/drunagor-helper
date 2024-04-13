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
import * as enUS from "@/locales/en_US.json";
import * as deDE from "@/locales/de_DE.json";
import * as frFR from "@/locales/fr_FR.json";
import * as itIT from "@/locales/it_IT.json";
import * as plPL from "@/locales/pl_PL.json";
import * as ptBR from "@/locales/pt_BR.json";
import * as esES from "@/locales/es_ES.json";
import { ConfigurationStore } from "@/store/ConfigurationStore";

const pinia = createPinia();

const messages = {
  en_US: {
    ...enUS,
  },
  de_DE: {
    ...deDE,
  },
  fr_FR: {
    ...frFR,
  },
  it_IT: {
    ...itIT,
  },
  pl_PL: {
    ...plPL,
  },
  pt_BR: {
    ...ptBR,
  },
  es_ES: {
    ...esES,
  },
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en_US",
  fallbackLocale: "en_US",
  messages,
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

const configurationStore = ConfigurationStore();
i18n.global.locale.value = configurationStore.enabledLanguage as "en_US" | "de_DE";

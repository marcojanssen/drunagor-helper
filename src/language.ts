import { ConfigurationStore } from "@/store/ConfigurationStore";
import { i18n } from "@/i18n";

export function setLanguage(language: string) {
  const configurationStore = ConfigurationStore();
  configurationStore.enabledLanguage = language;
}

export async function loadLanguage(language: string) {
  const supportedLanguages = ["en_US", "de_DE", "fr_FR", "es_ES", "it_IT", "pl_PL", "pt_BR"];

  if (!supportedLanguages.includes(language)) {
    throw new Error(`Unsupported language: ${language}`);
  }

  let messages = await import(`@/locales/${language}/app.yaml`);
  if (messages.default === null) {
    messages = await import("@/locales/en_US/app.yaml");
  }

  let keywords = await import(`@/locales/${language}/keywords.yaml`);
  if (keywords.default === null) {
    keywords = await import("@/locales/en_US/keywords.yaml");
  }

  let items = await import(`@/locales/${language}/items.yaml`);
  if (items.default === null) {
    items = await import("@/locales/en_US/items.yaml");
  }

  let campaign = await import(`@/locales/${language}/campaign.yaml`);
  if (campaign.default === null) {
    campaign = await import("@/locales/en_US/campaign.yaml");
  }

  messages = { ...messages.default, ...keywords.default, ...items.default, ...campaign.default };

  i18n.global.locale.value = language;
  i18n.global.setLocaleMessage(language, messages);
}

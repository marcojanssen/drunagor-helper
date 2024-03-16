<script setup lang="ts">
import { ContentDataStore } from "@/data/store/ContentDataStore";
import type { ContentId } from "@/data/type/ContentId";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { watch, ref } from "vue";
import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n";

const toast = useToast();
const { t } = useI18n();

const contentStore = ContentDataStore();
const configurationStore = ConfigurationStore();
const heroContentSettings = ref([] as ContentId[]);

configurationStore.enabledHeroContent.forEach((enabledContent) => {
  heroContentSettings.value.push(enabledContent);
});

watch(heroContentSettings, async (newSettings) => {
  if (newSettings.length > 0) {
    configurationStore.$patch({ enabledHeroContent: newSettings });
  } else {
    toast.error(t("configuration.error.atleast-one-selected"));
  }
});
</script>

<template>
  <div id="configuration-content-hero" class="bg-neutral form-control grid gap-4 p-4 drop-shadow-lg rounded-lg w-full">
    <label v-for="content in contentStore.getAllWithHeroes()" :key="content.id" class="cursor-pointer">
      <span>{{ $t(content.translation_key) }}</span>
      <input
        type="checkbox"
        v-model="heroContentSettings"
        :id="content.id"
        :value="content.id"
        class="float-right w-5 h-5 text-emerald-500 bg-base-100 rounded"
      />
    </label>
  </div>
</template>

<style scoped></style>

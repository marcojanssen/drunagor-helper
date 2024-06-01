<script setup lang="ts">
import { ContentDataStore } from "@/data/store/ContentDataStore";
import type { ContentId } from "@/data/type/ContentId";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { watch, ref } from "vue";
import { useToast } from "primevue/usetoast";
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
    toast.add({
      severity: "error",
      summary: "Error",
      detail: t("configuration.error.atleast-one-selected"),
      life: 3000,
    });
  }
});
</script>

<template>
  <Card class="w-full" data-testid="configuration-content-hero">
    <template #title> {{ $t("configuration.hero-content") }} </template>
    <template #content>
      <div v-for="content in contentStore.getAllWithHeroes()" :key="content.id" class="pb-4">
        <label class="cursor-pointer"
          >{{ $t(content.translation_key) }}
          <Checkbox
            variant="outlined"
            :data-testid="'configuration-content-hero-' + content.id"
            v-model="heroContentSettings"
            :value="content.id"
            class="float-right"
          />
        </label>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>

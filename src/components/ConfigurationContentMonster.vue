<script setup lang="ts">
import { ContentDataStore } from "@/data/store/ContentDataStore.js";
import type { ContentId } from "@/data/type/ContentId";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { watch, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";

const toast = useToast();
const { t } = useI18n();

const contentStore = ContentDataStore();
const configurationStore = ConfigurationStore();
const monsterContentSettings = ref([] as ContentId[]);

configurationStore.enabledMonsterContent.forEach((enabledContent) => {
  monsterContentSettings.value.push(enabledContent);
});

watch(monsterContentSettings, async (newSettings) => {
  if (newSettings.length > 0) {
    configurationStore.$patch({ enabledMonsterContent: newSettings });
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
  <Card class="w-full" data-testid="configuration-content-monster">
    <template #title> {{ $t("configuration.monster-content") }} </template>
    <template #content>
      <div v-for="content in contentStore.getAllWithMonsters()" :key="content.id" class="pb-4">
        <label class="cursor-pointer"
          >{{ $t(content.translation_key) }}
          <Checkbox
            variant="outlined"
            v-model="monsterContentSettings"
            :data-testid="'configuration-content-monster-' + content.id"
            :value="content.id"
            class="float-right"
          />
        </label>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>

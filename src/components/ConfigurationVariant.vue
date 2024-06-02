<script setup lang="ts">
import type { VariantId } from "@/data/type/VariantId";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { VariantStore } from "@/store/VariantStore.js";
import { watch, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";

const toast = useToast();
const { t } = useI18n();

const variantStore = VariantStore();
const configurationStore = ConfigurationStore();
const variantSettings = ref([] as VariantId[]);

configurationStore.enabledVariants.forEach((enabledVariant) => {
  variantSettings.value.push(enabledVariant);
});
watch(variantSettings, async (newSettings) => {
  if (newSettings.length > 0) {
    configurationStore.$patch({ enabledVariants: newSettings });
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
  <Card class="w-full" data-testid="configuration-variant">
    <template #title> {{ $t("configuration.enabled-variant") }} </template>
    <template #content>
      <div v-for="variant in variantStore.getAll()" :key="variant.id" class="pb-4">
        <label class="cursor-pointer"
          >{{ $t(variant.translation_key) }}
          <Checkbox
            variant="outlined"
            v-model="variantSettings"
            :data-testid="'configuration-variant-' + variant.id"
            :value="variant.id"
            class="float-right"
          />
        </label>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>

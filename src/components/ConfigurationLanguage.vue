<script setup lang="ts">
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { LanguageStore } from "@/store/LanguageStore";
import { watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const languageStore = LanguageStore();
const configurationStore = ConfigurationStore();

watch(locale, () => {
  configurationStore.enabledLanguage = locale.value;
});
</script>

<template>
  <div id="configuration-language" class="grid gap-4 bg-neutral form-control p-4 drop-shadow-lg rounded-lg w-full">
    <label v-for="language in languageStore.getAll()" :key="language.locale" class="cursor-pointer">
      <span class="label-text text-base">
        {{ $t(language.translation_key) }}
      </span>
      <input
        type="radio"
        v-model="$i18n.locale"
        :id="language.locale"
        :value="language.locale"
        class="float-right w-5 h-5 text-emerald-500 bg-base-100 rounded"
      />
    </label>
  </div>
</template>
<style scoped></style>

<script setup lang="ts">
import { setLanguage, loadLanguage } from "@/language";
import { LanguageStore } from "@/store/LanguageStore";
import { watch } from "vue";
import { useI18n } from "vue-i18n";

const languageStore = LanguageStore();
const { locale } = useI18n();

watch(locale, () => {
  setLanguage(locale.value);
  loadLanguage(locale.value);
});
</script>

<template>
  <Card class="w-full" data-testid="configuration-language">
    <template #title> {{ $t("configuration.language") }} </template>
    <template #content>
      <div v-for="language in languageStore.getAll()" :key="language.locale" class="pb-4">
        <label class="cursor-pointer"
          >{{ $t(language.translation_key) }}
          <RadioButton
            variant="outlined"
            v-model="$i18n.locale"
            :data-testid="'configuration-language-' + language.locale"
            :value="language.locale"
            class="float-right"
          />
        </label>
      </div>
      <div>
        <a
          target="_blank"
          class="underline"
          href="https://github.com/marcojanssen/drunagor-helper/blob/main/CONTRIBUTING.md"
          >Click here to find out how to contribute</a
        >
      </div>
    </template>
  </Card>
</template>
<style scoped></style>

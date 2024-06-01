<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { KeywordDataRepository } from "@/data/repository/KeywordDataRepository";
import BaseListSearch from "@/components/BaseListSearch.vue";
import { marked } from "marked";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import { useI18n } from "vue-i18n";
import Card from "primevue/card";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

const { t } = useI18n();
const route = useRoute();
const keywordDataRepository = new KeywordDataRepository();
const configurationStore = ConfigurationStore();
keywordDataRepository.load(configurationStore.enabledLanguage);
const keywords = keywordDataRepository.findAll();

let preselectedKeyword = "";
let preselectedKeywordId = "";
if (route.hash) {
  preselectedKeywordId = route.hash.toString().replace(/[#]/g, "");
  preselectedKeyword = preselectedKeywordId.replace(/[-]/g, " ");
}

let filteredKeyword = computed(() =>
  query.value === ""
    ? keywords
    : keywords.filter((keyword) =>
        keyword.keyword.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

let query = ref("");
query.value = preselectedKeyword;
</script>

<template>
  <div class="grid place-items-center w-full">
    <Card class="w-full sticky top-16 z-10 mb-3">
      <template #title> {{ t("menu.keyword") }} </template>
      <template #content>
        <BaseListSearch id="keyword-search" @search="query = $event" :value="query" />
      </template>
    </Card>

    <Accordion id="keyword-list" class="w-full">
      <template v-for="keyword in filteredKeyword" :key="keyword.id">
        <AccordionTab :header="keyword.keyword">
          <span v-html="marked.parse(keyword.description)"></span>
        </AccordionTab>
      </template>
    </Accordion>
  </div>
</template>

<style scoped></style>

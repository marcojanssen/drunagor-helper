<script setup lang="ts">
import { ref } from "vue";
import { KeywordDataRepository } from "@/data/repository/KeywordDataRepository";
import type { KeywordData } from "@/data/repository/KeywordData";
import BaseListSearch from "@/components/BaseListSearch.vue";
import BaseList from "@/components/BaseList.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const keywordDataRepository = new KeywordDataRepository();

const filteredKeywords = ref([] as KeywordData[]);
searchKeywords();

function searchKeywords(query: string = "") {
  const keywords: KeywordData[] = [];
  const regExp = new RegExp(query, "gi");

  keywordDataRepository.findAll().forEach((keyword: KeywordData) => {
    if (regExp.test(keyword.keyword)) {
      keywords.push(keyword);
    }
  });

  filteredKeywords.value = keywords;
}
</script>

<template>
  <div>
    <BaseListSearch @search="searchKeywords" class="inset-16" />
    <BaseList>
      <template v-for="keyword in filteredKeywords" :key="keyword.id">
        <Disclosure as="div">
          <DisclosureButton class="py-2"> {{ keyword.keyword }} </DisclosureButton>
          <DisclosurePanel class="text-gray-500">
            {{ keyword.description }}
          </DisclosurePanel>
        </Disclosure>
      </template>
    </BaseList>
  </div>
</template>

<style scoped></style>

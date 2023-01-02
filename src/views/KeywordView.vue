<script setup lang="ts">
import { ref, computed } from "vue";
import { KeywordDataRepository } from "@/data/repository/KeywordDataRepository";
import BaseListSearch from "@/components/BaseListSearch.vue";
import BaseList from "@/components/BaseList.vue";
import KeywordListItem from "@/components/KeywordListItem.vue";

const keywordDataRepository = new KeywordDataRepository();
const keywords = keywordDataRepository.findAll();

let filteredKeyword = computed(() =>
  query.value === ""
    ? keywords
    : keywords.filter((keyword) =>
        keyword.keyword.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

let query = ref("");
</script>

<template>
  <BaseListSearch id="keyword-search" @search="query = $event" class="inset-16" />
  <BaseList id="keyword-list">
    <template v-for="keyword in filteredKeyword" :key="keyword.id">
      <KeywordListItem>
        <template #default>
          {{ keyword.keyword }}
        </template>
        <template #description>
          <span class="text-gray-500">{{ keyword.description }}</span>
        </template>
      </KeywordListItem>
    </template>
  </BaseList>
</template>

<style scoped></style>

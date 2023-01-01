<script setup lang="ts">
import { KeywordDataRepository } from "@/data/repository/KeywordDataRepository";
import type { KeywordColor } from "@/data/type/KeywordColor";

export interface Props {
  id: string;
  value?: string;
  color?: KeywordColor;
}

const props = withDefaults(defineProps<Props>(), {
  color: "default",
});

let className: string;
if (props.color == "pink") {
  className = "text-fuchsia-600";
}
if (props.color == "blue") {
  className = "text-blue-600";
}

const keywordRepository = new KeywordDataRepository();
const keyword = keywordRepository.find(props.id)?.keyword;
const description = keywordRepository.find(props.id)?.description;

if (keyword === undefined) {
  console.error("Keyword not found: " + props.id);
} else if (description === undefined) {
  console.warn("No description for keyword: " + props.id);
}
</script>

<template>
  <div class="tooltip" :class="className" :data-tip="description">
    <p class="uppercase">
      {{ keyword }} <span v-if="props.value">{{ props.value }}</span>
    </p>
  </div>
</template>

<style scoped></style>

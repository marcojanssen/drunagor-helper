<script setup lang="ts">
import type { MonsterRank } from "@/data/type/MonsterRank";
import KeywordTooltip from "./KeywordTooltip.vue";
import type { KeywordSeperator } from "@/data/type/KeywordSeperator";
import type { Keyword } from "@/data/store/MonsterData";

const props = defineProps<{
  attack: Array<Keyword | KeywordSeperator>;
}>();
</script>

<template>
  <div>
    <template v-for="(key, index) in props.attack" :key="index">
      <template v-if="key == ';'">{{ key }}&nbsp;</template>
      <template v-if="key == 'AND'">&nbsp;{{ key }}&nbsp;</template>
      <template v-if="key == ','">{{ key }}&nbsp;</template>
      <template v-if="typeof key == 'object'">
        <template v-if="key.value">
          <KeywordTooltip :id="key.id" :value="key.value" :color="key.color" />
        </template>
        <template v-else>
          <KeywordTooltip :id="key.id" :color="key.color" />
        </template>
      </template>
    </template>
  </div>
</template>

<style scoped></style>

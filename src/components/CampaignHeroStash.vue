<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { HeroStore } from "@/store/HeroStore";
import type { ItemData } from "@/data/repository/ItemData";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";
import { useI18n } from "vue-i18n";

const heroStore = HeroStore();

const props = defineProps<{
  heroId: string;
  campaignId: string;
  repository: ItemDataRepository;
}>();
const itemCardIds = props.repository.findAll();

const stashedItemIds = ref([] as string[]);
const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
const { t } = useI18n();

if (typeof hero.stashedCardIds === "undefined") {
  hero.stashedCardIds = [];
}
stashedItemIds.value = hero.stashedCardIds;

let filteredItemCards = computed(() =>
  query.value === ""
    ? itemCardIds
    : itemCardIds.filter((stashedItem) =>
        t(stashedItem.translation_key)
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

let query = ref("");

function findItemCards(stashedItemIds: string[]): ItemData[] {
  const itemCards: ItemData[] = [];
  stashedItemIds.forEach((stashedItemId) => {
    let itemCard = props.repository.find(stashedItemId);
    if (itemCard) {
      itemCards.push(itemCard);
    }
  });

  return itemCards;
}

watch(stashedItemIds, (newStashedItemCardIds) => {
  heroStore.findInCampaign(props.heroId, props.campaignId).stashedCardIds = newStashedItemCardIds;
});
</script>

<template>
  <MultiSelect
    v-model="stashedItemIds"
    :options="filteredItemCards"
    :maxSelectedLabels="1"
    filter
    optionLabel="name"
    optionValue="id"
    :placeholder="$t('text.add-or-remove-stashed-items')"
    class="w-full md:w-14rem"
  >
    <template #value="slotProps">
      <template v-if="slotProps.value == '' || slotProps.value == null">
        {{ slotProps.placeholder }}
      </template>
      <template v-else-if="slotProps.value.length === 1">
        {{ t(repository.find(slotProps.value[0])?.translation_key ?? slotProps.value[0]) }}
      </template>
    </template>
    <template #option="slotProps">
      {{ t(slotProps.option.translation_key) }}
    </template>
  </MultiSelect>
  <template v-if="stashedItemIds.length > 0">
    <p class="text-sm text-gray-500 py-2">Cannot be used during a scenario.</p>
    <template v-for="itemCard in findItemCards(stashedItemIds)" :key="itemCard.id">
      <ul id="hero-stash-display" class="list-disc list-inside">
        <li>
          {{ t(itemCard.translation_key) }}
        </li>
      </ul>
    </template>
  </template>
</template>

<style scoped></style>

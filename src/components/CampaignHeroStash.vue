<script setup lang="ts">
import { ref, watch } from "vue";
import { HeroStore } from "@/store/HeroStore";
import type { ItemData } from "@/data/repository/ItemData";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";
import { useI18n } from "vue-i18n";
import * as _ from "lodash-es";

const heroStore = HeroStore();

const props = defineProps<{
  heroId: string;
  campaignId: string;
  repository: ItemDataRepository;
}>();
let items = props.repository.findAll();
const stashedItemIds = ref([] as string[]);
const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
const { t } = useI18n();

if (typeof hero.stashedCardIds === "undefined") {
  hero.stashedCardIds = [];
}
stashedItemIds.value = hero.stashedCardIds;

items = items.map((item) => {
  return {
    ...item,
    name: t(item.translation_key),
  };
});

items = _.sortBy(items, ["name"]);

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
  <span data-testid="item-stash">
    <MultiSelect
      v-model="stashedItemIds"
      :options="items"
      :maxSelectedLabels="1"
      filter
      optionLabel="name"
      optionValue="id"
      :placeholder="$t('text.add-or-remove-stashed-items')"
      class="w-full md:w-14rem"
    >
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
  </span>
</template>

<style scoped></style>

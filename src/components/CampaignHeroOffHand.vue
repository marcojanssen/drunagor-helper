<script setup lang="ts">
import type { OffHandItemData } from "@/data/repository/ItemData";
import { HeroStore } from "@/store/HeroStore";
import ItemCardSelect from "@/components/ItemCardSelect.vue";
import type { HeroData } from "@/data/repository/HeroData";
import { heroCanUse } from "@/data/repository/HeroData";
import { computed } from "vue";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";

const heroStore = HeroStore();

const emit = defineEmits(["stash"]);
const props = defineProps<{
  heroId: string;
  heroData: HeroData;
  campaignId: string;
  cardsDataRepository: ItemDataRepository;
  filterProficiencies: boolean;
}>();

const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
const offHandId = hero.equipment.offHandId ?? "";
const offHandCards = computed(() =>
  props.cardsDataRepository
    .findByType("Off Hand", null)
    .filter((item) => !props.filterProficiencies || heroCanUse(props.heroData, item))
    .map((card) => card as OffHandItemData)
);

function subTypeList(item: OffHandItemData) {
  return item.offHandTypes.join(" | ");
}

function onClear() {
  hero.equipment.offHandId = "";
}

function onSelect(selectedId: string) {
  heroStore.findInCampaign(props.heroId, props.campaignId).equipment.offHandId = selectedId;
}

function onStash() {
  const heroState = heroStore.findInCampaign(props.heroId, props.campaignId);
  if (heroState.equipment.offHandId === "") return;
  heroStore.findInCampaign(props.heroId, props.campaignId).stashedCardIds.push(heroState.equipment.offHandId!);
  emit("stash");
}
</script>

<template>
  <ItemCardSelect
    @clear="onClear"
    :items="offHandCards"
    item-type="Off Hand"
    :sub-type-list="subTypeList"
    :value="offHandId"
    @selected="onSelect"
    @stash="onStash"
    :repository="cardsDataRepository"
  ></ItemCardSelect>
</template>

<style scoped></style>

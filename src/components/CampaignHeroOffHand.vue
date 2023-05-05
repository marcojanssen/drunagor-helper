<script setup lang="ts">
import type { OffHandCardData } from "@/data/repository/CardData";
import { HeroStore } from "@/store/HeroStore";
import ItemCardSelect from "@/components/ItemCardSelect.vue";
import type { CardDataRepository } from "@/data/repository/CardDataRepository";
import type { HeroData } from "@/data/repository/HeroData";
import { heroCanUse } from "@/data/repository/HeroData";
import { computed } from "vue";

const heroStore = HeroStore();

const emit = defineEmits(["stash"]);
const props = defineProps<{
  heroId: string;
  heroData: HeroData;
  campaignId: string;
  cardsDataRepository: CardDataRepository;
  filterProficiencies: boolean;
}>();

const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
const offHandId = hero.equipment.offHandId ?? "";
const offHandCards = computed(() =>
  props.cardsDataRepository
    .findByType("Off Hand")
    .filter((item) => !props.filterProficiencies || heroCanUse(props.heroData, item))
    .map((card) => card as OffHandCardData)
);

function subTypeList(item: OffHandCardData) {
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
  ></ItemCardSelect>
</template>

<style scoped></style>

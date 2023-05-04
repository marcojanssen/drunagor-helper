<script setup lang="ts">
import type { OffHandCardData } from "@/data/repository/CardData";
import { HeroStore } from "@/store/HeroStore";
import ItemCardSelect from "@/components/ItemCardSelect.vue";
import type { CardDataRepository } from "@/data/repository/CardDataRepository";

const heroStore = HeroStore();

const emit = defineEmits(["stash"]);
const props = defineProps<{
  heroId: string;
  campaignId: string;
  cardsDataRepository: CardDataRepository;
}>();

const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
const offHandId = hero.equipment.offHandId ?? "";
const offHandCards: OffHandCardData[] = props.cardsDataRepository
  .findByType("Off Hand")
  .map((card) => card as OffHandCardData);

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

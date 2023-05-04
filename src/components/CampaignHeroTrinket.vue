<script setup lang="ts">
import type { CardData } from "@/data/repository/CardData";
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
const trinketId = hero.equipment.trinketId ?? "";
const offHandCards: CardData[] = props.cardsDataRepository.findByType("Trinket");

function subTypeList(item: CardData) {
  return "";
}

function onClear() {
  hero.equipment.trinketId = "";
}

function onSelect(selectedId: string) {
  heroStore.findInCampaign(props.heroId, props.campaignId).equipment.trinketId = selectedId;
}

function onStash() {
  const heroState = heroStore.findInCampaign(props.heroId, props.campaignId);
  if (heroState.equipment.trinketId === "") return;
  heroStore.findInCampaign(props.heroId, props.campaignId).stashedCardIds.push(heroState.equipment.trinketId!);
  emit("stash");
}
</script>

<template>
  <ItemCardSelect
    @clear="onClear"
    :items="offHandCards"
    item-type="Trinket"
    :sub-type-list="subTypeList"
    :value="trinketId"
    @selected="onSelect"
    @stash="onStash"
  ></ItemCardSelect>
</template>

<style scoped></style>

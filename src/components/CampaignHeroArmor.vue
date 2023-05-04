<script setup lang="ts">
import type { ArmorCardData } from "@/data/repository/CardData";
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
const armorId = hero.equipment.armorId ?? "";
const offHandCards: ArmorCardData[] = props.cardsDataRepository
  .findByType("Armor")
  .map((card) => card as ArmorCardData);

function subTypeList(item: ArmorCardData) {
  if (typeof item.armorTypes === "undefined") {
    return "";
  }
  return item.armorTypes.join(" | ");
}

function onClear() {
  hero.equipment.armorId = "";
}

function onSelect(selectedId: string) {
  heroStore.findInCampaign(props.heroId, props.campaignId).equipment.armorId = selectedId;
}

function onStash() {
  const heroState = heroStore.findInCampaign(props.heroId, props.campaignId);
  if (heroState.equipment.armorId === "") return;
  heroStore.findInCampaign(props.heroId, props.campaignId).stashedCardIds.push(heroState.equipment.armorId!);
  emit("stash");
}
</script>

<template>
  <ItemCardSelect
    @clear="onClear"
    :items="offHandCards"
    item-type="Armor"
    :sub-type-list="subTypeList"
    :value="armorId"
    @selected="onSelect"
    @stash="onStash"
  ></ItemCardSelect>
</template>

<style scoped></style>

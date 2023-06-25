<script setup lang="ts">
import type { ArmorItemData } from "@/data/repository/ItemData";
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
const armorId = hero.equipment.armorId ?? "";
const offHandCards = computed(() =>
  props.cardsDataRepository
    .findByType("Armor", null)
    .filter((item) => !props.filterProficiencies || heroCanUse(props.heroData, item))
    .map((card) => card as ArmorItemData)
);

function subTypeList(item: ArmorItemData) {
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
    :repository="cardsDataRepository"
  ></ItemCardSelect>
</template>

<style scoped></style>

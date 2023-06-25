<script setup lang="ts">
import type { ItemData } from "@/data/repository/ItemData";
import { HeroStore } from "@/store/HeroStore";
import ItemCardSelect from "@/components/ItemCardSelect.vue";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";

const heroStore = HeroStore();

const emit = defineEmits(["stash"]);
const props = defineProps<{
  heroId: string;
  campaignId: string;
  cardsDataRepository: ItemDataRepository;
}>();

const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
const trinketId = hero.equipment.trinketId ?? "";
const offHandCards: ItemData[] = props.cardsDataRepository.findByType("Trinket", null);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function subTypeList(item: ItemData) {
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
    :repository="cardsDataRepository"
  ></ItemCardSelect>
</template>

<style scoped></style>

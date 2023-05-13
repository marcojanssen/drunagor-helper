<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import { HeroStore } from "@/store/HeroStore";
import { CoreItemDataRepository } from "@/data/repository/campaign/core/CoreItemDataRepository";
import type { ItemData } from "@/data/repository/ItemData";

const heroStore = HeroStore();
const cardDataRepository = new CoreItemDataRepository();

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();
const itemCardIds = cardDataRepository.findAll();

const stashedItemIds = ref([] as string[]);
const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
if (typeof hero.stashedCardIds === "undefined") {
  hero.stashedCardIds = [];
}
stashedItemIds.value = hero.stashedCardIds;

let filteredItemCards = computed(() =>
  query.value === ""
    ? itemCardIds
    : itemCardIds.filter((stashedItem) =>
        stashedItem.name.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

let query = ref("");

function clearSelection() {
  stashedItemIds.value = [];
  query.value = "";
}

function findItemCards(stashedItemIds: string[]): ItemData[] {
  const itemCards: ItemData[] = [];
  stashedItemIds.forEach((stashedItemId) => {
    let itemCard = cardDataRepository.find(stashedItemId);
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
  <Combobox v-model="stashedItemIds" multiple>
    <div class="relative mt-1">
      <div class="relative w-full cursor-default overflow-hidden rounded-lg text-left">
        <ComboboxButton as="div" class="flex">
          <ComboboxInput
            class="w-full bg-base-100 py-2 pl-3 pr-16 leading-5 focus:ring-0 rounded-lg"
            placeholder="Add or remove stashed items"
            @change="query = $event.target.value"
            id="hero-stash"
          />
        </ComboboxButton>
        <button
          id="hero-stash-clear"
          @click="clearSelection"
          v-if="stashedItemIds.length > 0"
          class="absolute inset-y-0 right-7 flex items-center pr-2"
        >
          <XMarkIcon class="h-5 w-5 text-white" />
        </button>
        <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-white" />
        </ComboboxButton>
      </div>

      <ComboboxOptions
        class="bg-base-100 -top-2 transform -translate-y-full absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1"
        id="hero-stash-options"
      >
        <div v-if="filteredItemCards.length === 0" class="relative cursor-default select-none py-2 px-4 text-white">
          Nothing found.
        </div>

        <ComboboxOption
          v-for="itemCard in filteredItemCards"
          as="template"
          :key="itemCard.id"
          :value="itemCard.id"
          v-slot="{ selected, active }"
        >
          <li
            class="relative cursor-pointer select-none py-2 pl-10 pr-4"
            :class="{
              'bg-emerald-500 text-white': active,
              'text-white': !active,
            }"
          >
            <span class="block truncate">
              {{ itemCard.name }}
            </span>
            <span
              v-if="selected"
              class="absolute inset-y-0 left-0 flex items-center pl-3"
              :class="{ 'text-white': active, 'text-emerald-500': !active }"
            >
              <CheckIcon class="h-5 w-5" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
  <template v-if="stashedItemIds.length > 0">
    <p class="text-sm text-gray-500 py-2">Cannot be used during a scenario.</p>
    <template v-for="itemCard in findItemCards(stashedItemIds)" :key="itemCard.id">
      <ul id="hero-stash-display" class="list-disc list-inside">
        <li>
          {{ itemCard.name }}
        </li>
      </ul>
    </template>
  </template>
</template>

<style scoped></style>

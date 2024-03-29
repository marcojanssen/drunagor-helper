<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import { StoryRecordUnfoldingRepository } from "@/data/repository/campaign/apocalypse/StoryRecordUnfoldingRepository";
import { CampaignStore } from "@/store/CampaignStore";
import type { Unfolding } from "@/data/repository/campaign/apocalypse/Unfolding";

const props = defineProps<{
  campaignId: string;
}>();

const campaignStore = CampaignStore();
const repository = new StoryRecordUnfoldingRepository();
const unfoldings = repository.findAll();

const unfoldingIds = ref([] as string[]);
unfoldingIds.value = campaignStore.find(props.campaignId).unfoldingIds ?? [];

let filteredUnfoldings = computed(() =>
  query.value === ""
    ? unfoldings
    : unfoldings.filter((unfolding) =>
        unfolding.name.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

let query = ref("");

function clearSelection() {
  unfoldingIds.value = [];
  query.value = "";
}

function findUnfoldings(followerIds: string[]): Unfolding[] {
  const outcomes: Unfolding[] = [];
  followerIds.forEach((followerId) => {
    let outcome = repository.find(followerId);
    if (outcome) {
      outcomes.push(outcome);
    }
  });

  return outcomes;
}

watch(unfoldingIds, (newUnfoldingIds) => {
  campaignStore.find(props.campaignId).unfoldingIds = newUnfoldingIds;
});
</script>

<template>
  <Combobox v-model="unfoldingIds" multiple>
    <div class="relative mt-1">
      <div class="relative w-full cursor-default overflow-hidden rounded-lg text-left">
        <ComboboxButton as="div" class="flex">
          <ComboboxInput
            class="w-full bg-base-100 py-2 pl-3 pr-16 leading-5 focus:ring-0 rounded-lg"
            placeholder="Add or remove unfolding"
            @change="query = $event.target.value"
            id="story-record-unfolding"
          />
        </ComboboxButton>
        <button
          id="story-record-unfolding-clear"
          @click="clearSelection"
          v-if="unfoldingIds.length > 0"
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
        id="story-record-unfolding-options"
      >
        <div v-if="filteredUnfoldings.length === 0" class="relative cursor-default select-none py-2 px-4 text-white">
          Nothing found.
        </div>

        <ComboboxOption
          v-for="unfolding in filteredUnfoldings"
          as="template"
          :key="unfolding.id"
          :value="unfolding.id"
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
              {{ unfolding.name }}
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
  <template v-if="unfoldingIds.length > 0">
    <template v-for="unfolding in findUnfoldings(unfoldingIds)" :key="unfolding.id">
      <ul id="story-record-unfolding-display" class="pt-2 list-disc list-inside">
        <li>
          {{ unfolding.name }}
        </li>
      </ul>
    </template>
  </template>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import { CampaignStore } from "@/store/CampaignStore";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  campaignId: string;
  repository: OutcomeRepository;
}>();

const campaignStore = CampaignStore();

const outcomes = props.repository.findAll();
const { t } = useI18n();

const outcomeIds = ref([] as string[]);
outcomeIds.value = campaignStore.find(props.campaignId).outcomeIds ?? [];

let filteredOutcomes = computed(() =>
  query.value === ""
    ? outcomes
    : outcomes.filter((outcome) =>
        t(outcome.translationKey)
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

let query = ref("");

function clearSelection() {
  outcomeIds.value = [];
  query.value = "";
}

function findOutcomes(outcomeIds: string[]): Outcome[] {
  const outcomes: Outcome[] = [];
  outcomeIds.forEach((outcomeId) => {
    let outcome = props.repository.find(outcomeId);
    if (outcome) {
      outcomes.push(outcome);
    }
  });

  return outcomes;
}

watch(outcomeIds, (newOutcomeIds) => {
  campaignStore.find(props.campaignId).outcomeIds = newOutcomeIds;
});
</script>

<template>
  <Combobox v-model="outcomeIds" multiple>
    <div class="relative mt-1">
      <div class="relative w-full cursor-default overflow-hidden rounded-lg text-left">
        <ComboboxButton as="div" class="flex">
          <ComboboxInput
            class="w-full bg-base-100 py-2 pl-3 pr-16 leading-5 rounded-lg focus:ring-0"
            :placeholder="t('text.add-or-remove-outcome')"
            @change="query = $event.target.value"
            id="story-record-outcome"
          />
        </ComboboxButton>
        <button
          id="story-record-outcome-clear"
          @click="clearSelection"
          v-if="outcomeIds.length > 0"
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
        id="story-record-outcome-options"
      >
        <div v-if="filteredOutcomes.length === 0" class="relative cursor-default select-none py-2 px-4 text-white">
          Nothing found.
        </div>

        <ComboboxOption
          v-for="outcome in filteredOutcomes"
          as="template"
          :key="outcome.id"
          :value="outcome.id"
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
              {{ t(outcome.translationKey) }}
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
  <template v-if="outcomeIds.length > 0">
    <p class="text-sm text-gray-500 py-2">
      {{ t("text.outcome-info") }}
    </p>
    <template v-for="outcome in findOutcomes(outcomeIds)" :key="outcome.id">
      <ul id="story-record-outcome-display" class="list-disc list-inside">
        <li>
          {{ t(outcome.translationKey) }}
          <span class="px-4 block" v-if="outcome.effect">
            {{ outcome.effect }}
          </span>
        </li>
      </ul>
    </template>
  </template>
</template>

<style scoped></style>

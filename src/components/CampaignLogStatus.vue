<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import type { Status } from "@/data/repository/campaign/Status";
import { HeroStore } from "@/store/HeroStore";
import type { StatusRepository } from "@/data/repository/campaign/StatusRepository";

const props = defineProps<{
  heroId: string;
  campaignId: string;
  repository: StatusRepository;
}>();

const statuses = props.repository.findAll();

const heroStore = HeroStore();

const statusIds = ref([] as string[]);
statusIds.value = heroStore.findInCampaign(props.heroId, props.campaignId).statusIds ?? [];

let filteredStatuses = computed(() =>
  query.value === ""
    ? statuses
    : statuses.filter((status) =>
        status.name.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

let query = ref("");

function clearSelection() {
  statusIds.value = [];
  query.value = "";
}

function findStatuses(statusIds: string[]): Status[] {
  const statuses: Status[] = [];
  statusIds.forEach((statusId) => {
    let status = props.repository.find(statusId);
    if (status) {
      statuses.push(status);
    }
  });

  return statuses;
}

watch(statusIds, (newStatusIds) => {
  heroStore.findInCampaign(props.heroId, props.campaignId).statusIds = newStatusIds;
});
</script>

<template>
  <Combobox v-model="statusIds" multiple>
    <div class="relative mt-1">
      <div class="relative w-full cursor-default overflow-hidden rounded-lg text-left">
        <ComboboxButton as="div" class="flex">
          <ComboboxInput
            class="w-full bg-base-100 py-2 pl-3 pr-16 leading-5 focus:ring-0 border-0"
            placeholder="Add or remove status"
            @change="query = $event.target.value"
            id="campaign-log-status"
          />
        </ComboboxButton>
        <button
          id="campaign-log-status-clear"
          @click="clearSelection"
          v-if="statusIds.length > 0"
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
        id="campaign-log-status-options"
      >
        <div v-if="filteredStatuses.length === 0" class="relative cursor-default select-none py-2 px-4 text-white">
          Nothing found
        </div>

        <ComboboxOption
          v-for="status in filteredStatuses"
          as="template"
          :key="status.id"
          :value="status.id"
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
              {{ status.name }}
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
  <template v-if="statusIds.length > 0">
    <p class="text-sm text-gray-500 py-2">Statuses are removed during the camp phase.</p>
    <ul id="campaign-log-status-display" class="list-disc list-inside">
      <template v-for="status in findStatuses(statusIds)" :key="status.id">
        <li>
          {{ status.name }}
          <span class="px-4 block" v-if="status.effect">
            {{ status.effect }}
          </span>
        </li>
      </template>
    </ul>
  </template>
</template>

<style scoped></style>

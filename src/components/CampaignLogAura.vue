<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import type { AuraRepository } from "@/data/repository/campaign/AuraRepository";
import { HeroStore } from "@/store/HeroStore";

const props = defineProps<{
  heroId: string;
  campaignId: string;
  repository: AuraRepository;
}>();

const heroStore = HeroStore();
const auras = props.repository.findAll();

const auraId = ref("");
auraId.value = heroStore.findInCampaign(props.heroId, props.campaignId).auraId ?? "";

let filteredAura = computed(() =>
  query.value === ""
    ? auras
    : auras.filter((aura) =>
        aura.name.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

let query = ref("");

function clearSelection() {
  auraId.value = "";
  query.value = "";
}

function displayValue(id: unknown) {
  return props.repository.find(id as string)?.name ?? "";
}

watch(auraId, (newAuraId) => {
  heroStore.findInCampaign(props.heroId, props.campaignId).auraId = newAuraId;
});
</script>

<template>
  <div class="w-full">
    <Combobox v-model="auraId" nullable>
      <div class="relative mt-1">
        <div class="relative w-full cursor-default overflow-hidden rounded-lg text-left">
          <ComboboxButton as="div" class="flex">
            <ComboboxInput
              class="w-full bg-base-100 py-2 pl-3 pr-20 leading-5 focus:ring-0 border-0"
              :displayValue="displayValue"
              placeholder="Select aura"
              @change="query = $event.target.value"
              @blur="query = ''"
              id="campaign-log-aura"
            />
          </ComboboxButton>
          <button
            id="campaign-log-aura-clear"
            @click="clearSelection"
            v-if="auraId"
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
          id="campaign-log-aura-options"
        >
          <div
            v-if="filteredAura.length === 0 && query !== ''"
            class="relative cursor-default select-none py-2 px-4 text-white"
          >
            Nothing found.
          </div>

          <ComboboxOption
            v-for="aura in filteredAura"
            as="template"
            :key="aura.id"
            :value="aura.id"
            v-slot="{ selected, active }"
            @click="query = ''"
          >
            <li
              class="relative cursor-pointer select-none py-2 pl-10 pr-4"
              :class="{
                'bg-emerald-500 text-white': active,
                'text-white': !active,
              }"
            >
              <span class="block truncate">
                {{ aura.name }}
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
  </div>
  <template v-if="auraId">
    <p class="text-sm text-gray-500 py-2">Aura is removed when you receive a trauma cube or another aura.</p>
    <div id="campaign-log-aura-effect" class="w-full rounded-md">
      {{ props.repository.find(auraId)?.effect }}
    </div>
  </template>
</template>

<style scoped></style>

<script setup lang="ts">
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import { computed, ref, watch } from "vue";
import type { ItemData } from "@/data/repository/ItemData";
import type { ItemType } from "@/data/type/ItemType";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  items: ItemData[];
  itemType: ItemType | null;
  subTypeList: Function;
  value: string;
  repository: ItemDataRepository;
}>();
const emit = defineEmits(["clear", "selected", "stash"]);

const placeholder = "Select " + (props.itemType ?? "Bag Slot");
const selectedId = ref(props.value);
const { t } = useI18n();

let query = ref("");
let filteredItems = computed(() =>
  query.value === ""
    ? props.items
    : props.items.filter((card) =>
        t(card.translation_key)
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

function clearSelection() {
  selectedId.value = "";
  query.value = "";
  emit("clear");
}

function displayValue(id: unknown) {
  return t(props.repository.find(id as string)?.translation_key ?? "");
}

function onStash() {
  emit("stash");
  selectedId.value = "";
}

watch(selectedId, (newSelectedId) => {
  emit("selected", newSelectedId);
});
</script>

<template>
  <div class="flex flex-row">
    <div class="hero-item-stash cursor-pointer text-slate-500 flex-shrink leading-10 pr-2" @click="onStash">Stash</div>
    <div class="flex-auto">
      <Combobox v-model="selectedId" nullable>
        <div class="relative mt-1">
          <div class="relative w-full cursor-default overflow-hidden rounded-lg text-left">
            <ComboboxButton as="div" class="flex">
              <ComboboxInput
                class="hero-item w-full bg-base-100 py-2 pl-3 pr-20 leading-5 focus:ring-0 rounded-lg"
                :displayValue="displayValue"
                :placeholder="placeholder"
                @change="query = $event.target.value"
                @blur="query = ''"
              />
            </ComboboxButton>
            <button
              @click="clearSelection"
              v-if="selectedId"
              class="hero-item-clear absolute inset-y-0 right-7 flex items-center pr-2"
            >
              <XMarkIcon class="h-5 w-5 text-white" />
            </button>
            <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon class="h-5 w-5 text-white" />
            </ComboboxButton>
          </div>

          <ComboboxOptions
            class="bg-base-100 -top-2 transform -translate-y-full absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1"
            id="hero-weapon-options"
          >
            <div
              v-if="filteredItems.length === 0 && query !== ''"
              class="relative cursor-default select-none py-2 px-4 text-white"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="cardData in filteredItems"
              as="template"
              :key="cardData.id"
              :value="cardData.id"
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
                <div class="block truncate">
                  {{ t(cardData.translation_key) }}
                  <span class="text-slate-500 text-xs" v-if="subTypeList(cardData) !== ''">{{
                    subTypeList(cardData)
                  }}</span>
                </div>
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
  </div>
</template>

<style scoped></style>

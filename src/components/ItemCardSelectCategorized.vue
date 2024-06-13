<script setup lang="ts">
import { ref, watch, computed } from "vue";
import type { ItemData } from "@/data/repository/ItemData";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";
import { useI18n } from "vue-i18n";
import { sortBy } from "lodash-es";

const props = defineProps<{
  categories: { name: string; items: ItemData[] }[];
  subTypeList: Function;
  bagSlot: number;
  value: string;
  repository: ItemDataRepository;
}>();
const emit = defineEmits(["clear", "selected", "stash"]);

const placeholder = "Select Bag Slot " + props.bagSlot;
const selectedId = ref(props.value);
const { t } = useI18n();

let categories = computed(() => {
  return props.categories.map((category) => {
    const translatedItems = category.items.map((item) => {
      return {
        ...item,
        name: t(item.translation_key),
      };
    });

    const sortedItems = sortBy(translatedItems, ["name"]);

    return {
      ...category,
      items: sortedItems,
    };
  });
});

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
    <div class="hero-item-stash cursor-pointer text-slate-500 flex-shrink leading-10 pr-2" @click="onStash">
      {{ t("label.stash") }}
    </div>
    <div class="flex-auto" :data-testid="'item-bag-slot-' + props.bagSlot">
      <Dropdown
        v-model="selectedId"
        :options="categories"
        showClear
        checkmark
        filter
        optionLabel="name"
        optionValue="id"
        optionGroupLabel="name"
        optionGroupChildren="items"
        :placeholder="placeholder"
        class="w-full"
      >
        <template #option="slotProps">
          {{ slotProps.option.name }}
          <span class="text-slate-500 text-xs px-2" v-if="subTypeList(slotProps.option) !== ''">{{
            subTypeList(slotProps.option)
          }}</span>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<style scoped></style>

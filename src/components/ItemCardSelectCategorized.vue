<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { ItemData } from "@/data/repository/ItemData";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";
import { useI18n } from "vue-i18n";

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

let query = ref("");
let filteredCategories = computed(() =>
  query.value === ""
    ? props.categories
    : props.categories
        .map((category) => {
          return {
            name: category.name,
            items: category.items.filter((item) =>
              t(item.translation_key)
                .toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.value.toLowerCase().replace(/\s+/g, ""))
            ),
          };
        })
        .filter((category) => category.items.length > 0)
);

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
        :options="filteredCategories"
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
        <template #value="slotProps">
          <template v-if="slotProps.value == '' || slotProps.value == null">
            {{ slotProps.placeholder }}
          </template>
          <template v-else>
            {{ t(repository.find(slotProps.value)?.translation_key ?? slotProps.value) }}
          </template>
        </template>
        <template #option="slotProps">
          {{ t(slotProps.option.translation_key) }}
          <span class="text-slate-500 text-xs px-2" v-if="subTypeList(slotProps.option) !== ''">{{
            subTypeList(slotProps.option)
          }}</span>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<style scoped></style>

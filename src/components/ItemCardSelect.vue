<script setup lang="ts">
import { ref, watch, computed } from "vue";
import type { ItemData } from "@/data/repository/ItemData";
import type { ItemType } from "@/data/type/ItemType";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";
import { useI18n } from "vue-i18n";
import { sortBy } from "lodash-es";

const props = defineProps<{
  items: ItemData[];
  itemType: ItemType | null;
  subTypeList: Function;
  value: string | null;
  repository: ItemDataRepository;
}>();
const emit = defineEmits(["clear", "selected", "stash"]);
const placeholder = "Select " + props.itemType;
const selectedId = ref(props.value);

const { t } = useI18n();

let items = computed(() =>
  sortBy(
    props.items.map((item) => {
      return {
        ...item,
        name: t(item.translation_key),
      };
    }),
    ["name"]
  )
);

function onStash() {
  emit("stash");
  selectedId.value = null;
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
    <div class="flex-auto" :data-testid="'item-' + itemType">
      <Dropdown
        v-model="selectedId"
        :options="items"
        showClear
        checkmark
        filter
        optionLabel="name"
        optionValue="id"
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

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { ItemData } from "@/data/repository/ItemData";
import type { ItemType } from "@/data/type/ItemType";
import type { ItemDataRepository } from "@/data/repository/ItemDataRepository";
import { useI18n } from "vue-i18n";

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
        :options="filteredItems"
        showClear
        checkmark
        optionLabel="name"
        optionValue="id"
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

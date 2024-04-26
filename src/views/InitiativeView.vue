<script setup lang="ts">
// #region external imports
import { storeToRefs } from "pinia";
import BaseDivider from "@/components/BaseDivider.vue";
import OnOffButton from "@/components/common/OnOffButton.vue";
import {
    ArrowPathIcon,
    PlusIcon
} from "@heroicons/vue/24/solid";
import { useInitiativeStore } from "@/store/InitiativeStore";
import { ref } from "vue";
// #endregion

// #region internal imports
import MonsterPicker from "@/components/initiative/MonsterPicker.vue";
// #endregion

// #region store bindings
const { autoConfirmDelete, useDefaultHp } = storeToRefs(useInitiativeStore());
const { addMonster, clearInitiative } = useInitiativeStore();
// #endregion

// #region monster picker
const monsterPickerRef = ref(null);

const openMonsterPicker = (): void => {
    if (monsterPickerRef.value === null) {
        throw new Error("monsterPickerRef is null");
    }
    (monsterPickerRef.value as any).openModal();
};
// #endregion

</script>

<template>
    <div class="grid place-items-center w-full">
        <BaseDivider>Initiative</BaseDivider>
        <div class="w-full flex">
            <PlusIcon class="w-8 bg-slate-800 rounded-lg mx-1" @click="openMonsterPicker" />
            <ArrowPathIcon class="w-8 text-red-400 rounded-lg mx-1" @click="clearInitiative" />
            <OnOffButton :flag="autoConfirmDelete" @click="autoConfirmDelete = !autoConfirmDelete"
                class="py-1 px-4 mx-1">
                Auto Confirm
            </OnOffButton>
            <OnOffButton :flag="useDefaultHp" @click="useDefaultHp = !useDefaultHp" class="py-1 px-4 mx-1">
                Default HP
            </OnOffButton>
        </div>
    </div>
    <!-- Pop-Ups -->
    <MonsterPicker @pick-monster="addMonster" ref="monsterPickerRef" />
</template>
<script setup lang="ts">
// #region external imports
import { storeToRefs } from "pinia";
import {
    ArrowPathIcon,
    PlusIcon,
    XMarkIcon,
} from "@heroicons/vue/24/solid";
import { ref, computed } from "vue";
// #endregion

// #region internal imports
import { useInitiativeStore } from "@/store/InitiativeStore";
import MonsterPicker from "@/components/initiative/MonsterPicker.vue";
import MonsterInitiative from "@/components/initiative/MonsterInitiative.vue";
import { InitiativeList, InitiativeTypes } from "@/data/initiative/InitiativePlaces";
import type { ActiveMonsterData } from "@/data/store/MonsterData";
import BaseDivider from "@/components/BaseDivider.vue";
import OnOffButton from "@/components/common/OnOffButton.vue";
import BaseModal from "@/components/BaseModal.vue";
// #endregion

// #region store bindings
const { autoConfirmDelete, useDefaultHp } = storeToRefs(useInitiativeStore());
const { getInitiativeList, addMonster, clearInitiative } =
    useInitiativeStore();
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

// #region initiative list
const initiativeList = computed(() => {
    return getInitiativeList();
});

const monsterByInitiative = (initiative: number) => {
    return initiativeList.value.filter((monster: ActiveMonsterData) => {
        return monster.initiative === initiative;
    });
};
// #endregion

// #region details popup
const detailsOpen = ref(false);
const detailsMonster = ref<ActiveMonsterData | null>(null);
const detailsMonsterCardUrl = computed((): string | null => {
    const cards = detailsMonster?.value?.images?.cards;
    if (!cards) {
        console.warn("No cards found for monster", detailsMonster);
        return detailsMonster?.value?.images?.big || null;
    }
    const index = (detailsMonster?.value as any)?.cardIndex || 0;
    return cards[index] || detailsMonster?.value?.images?.big || null;
});
function openDetails(monster: ActiveMonsterData) {
    detailsMonster.value = monster;
    detailsOpen.value = true;
}
function closeDetails() {
    detailsOpen.value = false;
}
// #endregion

</script>

<template>
    <div class="grid place-items-center w-full">
        <BaseDivider>Initiative</BaseDivider>
        <!-- Action Buttons -->
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
        <!-- Initiative List -->
        <div container class="divide-y">
            <div v-for="initInfo in InitiativeList" :key="initInfo.index">
                <!-- Monster Initiatives -->
                <MonsterInitiative v-if="initInfo.type === InitiativeTypes.MONSTER" :turnImgUrl="initInfo.imgUrl"
                    :monsters="monsterByInitiative(initInfo.index)" @openDetails="openDetails" />
                <!-- Non Monster Initiatives -->
                <div v-if="initInfo.type != InitiativeTypes.MONSTER" class="grid grid-cols-12 divide-y"
                    id="initiative-container">
                    <div class="col-span-11 col-start-2 text-4xl font-extrabold mb-4">
                        {{ initInfo.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Pop-Ups -->
    <MonsterPicker @pick-monster="addMonster" ref="monsterPickerRef" />
    <BaseModal :is-open="detailsOpen" @close-modal="closeDetails">
        <template #header>
            <div class="grid grid-cols-2">
                <div class="font-medium">{{ detailsMonster?.name }} ({{ detailsMonster?.baseColor }}) - <span
                        class="text-slate-600">[{{ detailsMonster?.content }}]</span></div>
                <div>
                    <button id="close-modal"
                        class="px-2 py-2 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg float-right"
                        @click="closeDetails">
                        <XMarkIcon class="h-5 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg" />
                    </button>
                </div>
            </div>
        </template>
        <template #default>
            <div class="container" @click="closeDetails">
                <div class="border-8" :style="'border-color:' + detailsMonster?.baseColor + ';'">
                    <img :src="detailsMonsterCardUrl" class="rounded-sm shadow dark:bg-gray-800 w-full" />
                </div>
                <img :src="detailsMonster?.images?.miniature" class="rounded-sm shadow dark:bg-gray-800 w-full" />
            </div>
        </template>
    </BaseModal>
</template>
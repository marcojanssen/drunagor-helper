<script setup lang="ts">
// #region external imports
import { ref, computed } from "vue";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/vue/24/solid";
import _ from "lodash";
// #endregion

// #region internal imports
import { useInitiativeStore } from "@/store/InitiativeStore";
import type { ICondition } from "@/data/conditions/Condition";
import { KnockDown, Stun } from "@/data/conditions/Condition";
import type { ActiveMonsterData, MonsterData } from "@/data/store/MonsterData";
// #endregion

const props = defineProps<{
    monster: ActiveMonsterData,
}>();

// #region store bindings
const { decrementCondition, incrementCondition } = useInitiativeStore();
// #endregion


const validConditions = computed(() => {
    return _.filter(props.monster.conditions, (condition) => {
        return !_.includes(immunities.map(c => c.name), condition.name);
    });
});

let immunities = props.monster.conditionImmunities || [] as ICondition[];

if (props.monster.size == "large") {
    let largeImmunities = [KnockDown, Stun];
    for (let condition of largeImmunities) {
        if (!_.includes(immunities.map(c => c.name), condition.name)) {
            immunities.push(condition);
        }
    }
}

const isOpen = ref(false);

function handleConditionClicked(condition: ICondition) {
    if (isOpen.value) {
        incrementCondition(props.monster, condition);
    } else {
        decrementCondition(props.monster, condition);
    }
}

function alertConditionImmunity(condition: ICondition, monster: MonsterData) {
    alert(`${monster.name} is immune to ${condition.name}`);
}

</script>

<template>
    <div v-for="(condition, index) in validConditions" :key="index">
        <img :src="condition.images[condition.count]" class="w-12" v-if="isOpen || condition.count > 0"
            :class="{ 'opacity-25': condition.count < 1 }" @click="handleConditionClicked(condition)" />
    </div>
    <div v-for="(condition, index) in immunities" :key="index">
        <img :src="condition.image" class="w-12 border-red-500 border-2 rounded-lg opacity-25" v-if="isOpen"
            @click="alertConditionImmunity(condition, monster);" />
    </div>
    <ChevronRightIcon v-if="!isOpen" class="w-12 fill-wite" @click="isOpen = true" />
    <ChevronLeftIcon v-if="isOpen" class="w-12 fill-wite" @click="isOpen = false" />
</template>

<style scoped></style>
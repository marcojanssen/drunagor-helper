<script setup lang="ts">
import { ref } from "vue";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/vue/24/solid";
import type { ICondition } from "@/data/conditions/Condition";
import { Conditions, KnockDown, Stun } from "@/data/conditions/Condition";
import type { MonsterData } from "@/data/store/MonsterData";
import _ from "lodash";

const emit = defineEmits(["add-condition", "remove-condition",]);

const props = defineProps<{
    conditions: ICondition[],
    monster: MonsterData,
}>();
let immunities = props.monster.conditionImmunities || [] as ICondition[];

if (props.monster.size == "large") {
    let largeImmunities = [KnockDown, Stun];
    for (let condition of largeImmunities) {
        if (!_.includes(immunities.map(c => c.name), condition.name)) {
            immunities.push(condition);
        }
    }
}

let validConditions = _.filter(Conditions, (condition) => {
    return !_.includes(immunities.map(c => c.name), condition.name);
});

let conditions = ref(props.conditions);

const isOpen = ref(false);

function getIndex(condition: ICondition): number {
    return conditions.value.map(c => c.name).indexOf(condition.name);
}

function isSelected(condition: ICondition) {
    let index: number = getIndex(condition);
    return index !== -1;
}

function toggleCondition(condition: ICondition) {
    const index = getIndex(condition);
    if (index == -1) {
        conditions.value.push(condition);
        emit("add-condition", condition);
    } else {
        conditions.value.splice(index, 1);
        emit("remove-condition", condition);
    }
}

function alertConditionImmunity(condition: ICondition, monster: MonsterData) {
    alert(`${monster.name} is immune to ${condition.name}`);
}

</script>

<template>

    <div v-for="(condition, index) in validConditions" :key="index">
        <img :src="condition.image" class="w-12" v-if="isOpen || isSelected(condition)"
            :class="{ 'opacity-25': !isSelected(condition) }" @click="toggleCondition(condition)" />
    </div>
    <div v-for="(condition, index) in immunities" :key="index">
        <img :src="condition.image" class="w-12 border-red-500 border-2 rounded-lg opacity-25" v-if="isOpen"
            @click="alertConditionImmunity(condition, monster);" />
    </div>
    <ChevronRightIcon v-if="!isOpen" class="w-12 fill-wite" @click="isOpen = true" />
    <ChevronLeftIcon v-if="isOpen" class="w-12 fill-wite" @click="isOpen = false" />
</template>

<style scoped></style>
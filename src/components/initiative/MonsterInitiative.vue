<script setup lang="ts">

// #region external imports
import {
    HeartIcon,
    TrashIcon,
} from "@heroicons/vue/24/solid";
import { defineProps, defineEmits } from "vue";
// #endregion

// #region internal imports
import Conditions from "@/components/initiative/ConditionPicker.vue";
import type { ActiveMonsterData } from "@/data/store/MonsterData";
// #endregion

// #region props
const props = defineProps<{
    turnImgUrl?: string,
    monsters: ActiveMonsterData[],
    onHpSwipeRight: (monster: ActiveMonsterData) => void,
    onHpSwipeLeft: (monster: ActiveMonsterData) => void,
    removeMonster: (monster: ActiveMonsterData) => void,
}>();
// #endregion

// #region emits
const emit = defineEmits(["open-details"]);
// #endregion

</script>

<template>
    <div class="grid grid-cols-12" id="initiative-container">
        <div><img :src="turnImgUrl" /></div>
        <div class="col-span-11">
            <template v-for="(monster) in props.monsters.sort((a, b) => a.msTimestamp - b.msTimestamp)"
                :key="monster.msTimestamp">
                <BaseListItem>
                    <div class="grid grid-flow-col auto-cols-max" v-touch:swipe.right="() => onHpSwipeRight(monster)"
                        v-touch:swipe.left="() => onHpSwipeLeft(monster)">
                        <img :src="monster.images.big" @click="emit('open-details', monster)"
                            :style="'border-color:' + monster.baseColor + ';'"
                            class="bg-white border-8 rounded-full shadow dark:bg-gray-800"
                            :class="monster.size == 'large' ? 'w-32' : 'w-24'" />
                        <div>
                            <div class="font-semibold text-lg">
                                {{ monster.name }} ({{ monster.color }})
                            </div>
                            <div class="grid grid-flow-col auto-cols-max">
                                <div class="grid w-12">
                                    <div class="col-start-1 row-start-1 justify-center">
                                        <HeartIcon class="fill-red-500 w-12 self-center" />
                                    </div>
                                    <div
                                        class="col-start-1 row-start-1 self-center text-center font-semibold text-red self-center">
                                        {{ monster.hp }}
                                    </div>
                                </div>
                                <Conditions :monster="monster" />
                                <TrashIcon class="fill-gray-600 w-12" @click="removeMonster(monster)" />
                            </div>
                        </div>
                    </div>
                </BaseListItem>
            </template>
        </div>
    </div>
</template>
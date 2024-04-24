<script setup lang="ts">
import BaseDivider from "@/components/BaseDivider.vue";
import OnOffButton from "@/components/common/OnOffButton.vue";
import {
    PlusIcon
} from "@heroicons/vue/24/solid";
const foo1 = true;
const foo2 = false;
</script>

<template>
    <div class="grid place-items-center w-full">
        <BaseDivider>Initiative</BaseDivider>
        <div class="w-full flex">
            <PlusIcon class="w-8" />
            <OnOffButton :flag="foo1">Auto Confirm</OnOffButton>
            <OnOffButton :flag="foo2">Default HP</OnOffButton>
        </div>
    </div>
</template>
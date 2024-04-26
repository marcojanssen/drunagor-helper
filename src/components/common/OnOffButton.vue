<script setup lang="ts">
let { flag } = defineProps(["flag"]);
</script>

<template>
    <div class="flex flex-wrap bg-base-100 justify-center rounded-lg" :class="flag ? 'bg-red-600' : 'bg-green-600'">
        <slot></slot>: {{ flag ? 'ON' : 'OFF' }}
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
const { flag, text } = defineProps(["flag", "text"]);
</script>

<template>
    <div class="flex flex-wrap bg-base-100 justify-center py-1 px-4 mx-1 rounded-lg"
        :class="flag ? 'bg-red-600' : 'bg-green-600'">
        <slot></slot>: {{ flag ? 'ON' : 'OFF' }}
    </div>
</template>

<style scoped></style>

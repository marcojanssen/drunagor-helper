<script setup lang="ts">
import { ref, toRef, watch } from "vue";

const props = defineProps<{
  title: string;
  background: string;
  frontImage: string;
  subTitle?: string;
  backImage?: string;
}>();

const currentImage = ref("");
const frontImage = toRef(props, "frontImage");

currentImage.value = frontImage.value;

watch(frontImage, async (newImage: string) => {
  currentImage.value = newImage;
});

function swapImage() {
  if (props.backImage == undefined) {
    return;
  }
  if (currentImage.value === props.frontImage) {
    currentImage.value = props.backImage;
  } else {
    currentImage.value = props.frontImage;
  }
}
</script>

<template>
  <div
    class="border-silver bg-black relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
    :style="{ backgroundImage: 'url(' + props.background + ')' }"
  >
    <img id="swappable-image" :src="currentImage" />
    <div class="absolute top-border-silver h-20 bottom-0 left-0 right-0 bg-black bg-opacity-70">
      <p id="swappable-title" class="text-center font-semibold pt-2">{{ props.title }}</p>
      <p id="swappable-sub-title" class="text-center">{{ props.subTitle }}</p>
    </div>
    <Button
      icon="pi pi-arrow-right-arrow-left"
      aria-label="Swap"
      v-if="backImage"
      class="absolute left-1/2 -bottom-3 transform -translate-x-1/2 p-2 w-6 h-6"
      id="swappable-button"
      @click="swapImage()"
    />
  </div>
</template>

<style scoped>
.border-silver {
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #d4d4d8, #111827) 1;
}
.top-border-silver {
  border-top: 2px solid #1f2937;
}
</style>

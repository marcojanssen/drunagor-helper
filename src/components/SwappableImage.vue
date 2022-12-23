<script setup lang="ts">
import { ref, toRef, watch } from "vue";
import { ArrowsRightLeftIcon } from "@heroicons/vue/20/solid";

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
    class="border-gold bg-black relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
    :style="{ backgroundImage: 'url(' + props.background + ')' }"
  >
    <img id="swappable-image" :src="currentImage" />
    <div class="absolute top-border-gold h-20 bottom-0 left-0 right-0 bg-black bg-opacity-70">
      <p id="swappable-title" class="text-center font-semibold pt-2">{{ props.title }}</p>
      <p id="swappable-sub-title" class="text-center">{{ props.subTitle }}</p>
    </div>
    <button
      id="swappable-button"
      v-if="backImage"
      @click="swapImage()"
      class="absolute left-1/2 -bottom-6 transform -translate-x-1/2 p-2"
    >
      <ArrowsRightLeftIcon class="bg-[#3d342d] text-[#f5dab7] h-8 rounded-lg p-1" />
    </button>
  </div>
</template>

<style scoped>
.border-gold {
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #f5dab7, #4c4037) 1;
}
.top-border-gold {
  border-top: 2px solid #4c4037;
}
</style>

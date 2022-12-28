<script setup lang="ts">
import { ref, toRef, watch } from "vue";
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(["close-modal"]);

const state = ref(false);
const isOpen = toRef(props, "isOpen");

state.value = isOpen.value;

watch(isOpen, async (value: boolean) => {
  state.value = value;
});

function setIsOpen(value: boolean) {
  state.value = value;
  emit("close-modal");
}
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog :open="isOpen" @close="setIsOpen(false)" as="div" class="relative z-10">
      <TransitionChild as="template" enter="duration-200 ease-out" enter-from="opacity-0" enter-to="opacity-100">
        <div class="fixed inset-0 bg-zinc-900 bg-opacity-80"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex h-full p-4 justify-center items-center">
          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
          >
            <DialogPanel
              class="bg-base-100 w-full max-w-xl h-full lg:h-5/6 transform overflow-y-auto rounded-2xl text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle class="sticky top-0 pt-4 px-4 bg-base-100 z-50">
                <slot name="header"> </slot>
              </DialogTitle>
              <div class="container px-4">
                <slot></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped></style>

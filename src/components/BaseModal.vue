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
    <Dialog :open="isOpen" @close="setIsOpen" as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-zinc-900 bg-opacity-80"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex h-screen justify-center items-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-xl h-full lg:h-3/4 transform overflow-y-auto rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h2" class="text-lg font-medium leading-6 py-4">
                <slot name="header"></slot>
              </DialogTitle>
              <slot></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped></style>

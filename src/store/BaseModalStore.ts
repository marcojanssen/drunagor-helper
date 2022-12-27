import { defineStore } from "pinia";
import { ref } from "vue";

export const BaseModalStore = defineStore("base-modal", () => {
  const state = ref(false);

  function open() {
    state.value = true;
  }

  function close() {
    state.value = false;
  }

  function isOpen() {
    return state.value;
  }

  return {
    state,
    open,
    close,
    isOpen,
  };
});

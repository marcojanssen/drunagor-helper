<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogOverlay, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue";
import {
  Bars3Icon,
  Cog6ToothIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/solid";

const isOpen = ref(false);

function setIsOpen(value: boolean) {
  isOpen.value = value;
}

function close() {
  isOpen.value = false;
}

function open() {
  isOpen.value = true;
}
</script>

<template>
  <label @click="open" class="flex cursor-pointer">
    <Bars3Icon class="h-6 w-6" />
    <span class="pl-2">Menu</span>
  </label>

  <TransitionRoot as="template" :show="isOpen">
    <Dialog :open="isOpen" @close="setIsOpen">
      <DialogOverlay class="absolute z-40 inset-0 bg-black bg-opacity-60 backdrop-blur" />
      <TransitionChild
        enter="transform ease-in-out transition-transform duration-150"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transform ease-in-out transition-transform duration-150"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
        as="template"
      >
        <div class="fixed inset-0 z-50 flex">
          <DialogPanel>
            <ul class="w-80 h-full flex gap-1 flex-col pt-4 px-4 bg-base-300">
              <li>
                <router-link class="flex p-3 rounded items-center" to="/" @click="close">
                  <span>
                    <QuestionMarkCircleIcon class="h-7 w-7" />
                  </span>
                  <span class="pl-2">Randomizer</span>
                </router-link>
              </li>
              <li>
                <router-link class="flex p-3 rounded items-center" to="/party" @click="close">
                  <span>
                    <UserGroupIcon class="h-7 w-7" />
                  </span>
                  <span class="pl-2">Party</span>
                </router-link>
              </li>
              <li>
                <router-link class="flex p-3 rounded items-center" to="/keyword" @click="close">
                  <span>
                    <ListBulletIcon class="h-7 w-7" />
                  </span>
                  <span class="pl-2">Keyword</span>
                </router-link>
              </li>
              <li>
                <router-link class="flex p-3 rounded items-center" to="/configuration" @click="close">
                  <span>
                    <Cog6ToothIcon class="h-7 w-7" />
                  </span>
                  <span class="pl-2">Settings</span>
                </router-link>
              </li>
            </ul>
          </DialogPanel>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
a {
  outline: none;
}
.router-link-active {
  @apply bg-neutral;
}
</style>

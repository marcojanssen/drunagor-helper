<script setup lang="ts">
import { ref } from "vue";
import { ConfigurationStore } from "./store/ConfigurationStore";
import type { VariantId } from "./data/type/VariantId";
import {
  Bars3Icon,
  Cog6ToothIcon,
  ListBulletIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/solid";

const drawerClose = ref(false);
function closeDrawer() {
  drawerClose.value = false;
}

const configurationStore = ConfigurationStore();

//temp backwards compatibility
const variants = configurationStore.getEnabledVariants();

const newVariants = [] as VariantId[];
variants.forEach((variant: string) => {
  if (variant === "Standard") {
    variant = "standard";
  } else if (variant === "Alternate") {
    variant = "alternate";
  } else if (variant === "A / B") {
    variant = "complex";
  }
  newVariants.push(variant as VariantId);
});

configurationStore.enabledVariants = newVariants;
</script>

<template>
  <div class="drawer">
    <input id="menu-drawer" v-model="drawerClose" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="w-full navbar bg-neutral sticky top-0 z-50 drop-shadow">
        <label for="menu-drawer" class="flex cursor-pointer">
          <Bars3Icon class="h-6 w-6" />
          <span class="pl-2">Menu</span>
        </label>
      </div>
      <div class="container mx-auto lg:w-3/4 p-4">
        <router-view> </router-view>
      </div>
    </div>
    <div class="drawer-side">
      <label for="menu-drawer" class="drawer-overlay bg-opacity-90"></label>
      <ul class="menu w-80 flex flex-col pt-4 px-4 bg-base-300 drop-shadow">
        <li>
          <router-link class="flex" to="/" @click="closeDrawer">
            <span>
              <QuestionMarkCircleIcon class="h-7 w-7" />
            </span>
            <span>Randomizer</span>
          </router-link>
        </li>
        <li>
          <router-link class="flex" to="/party" @click="closeDrawer">
            <span>
              <UserGroupIcon class="h-7 w-7" />
            </span>
            <span>Party</span>
          </router-link>
        </li>
        <li>
          <router-link class="flex" to="/keyword" @click="closeDrawer">
            <span>
              <ListBulletIcon class="h-7 w-7" />
            </span>
            <span>Keyword <span class="text-emerald-300 text-xs font-semibold align-super">Beta</span></span>
          </router-link>
        </li>
        <li>
          <router-link class="flex" to="/configuration" @click="closeDrawer">
            <span>
              <Cog6ToothIcon class="h-7 w-7" />
            </span>
            <span>Content / Variant</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply bg-neutral;
}
a:active {
  @apply bg-neutral text-white;
}
</style>

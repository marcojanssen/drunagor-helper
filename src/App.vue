<script setup lang="ts">
import { ref } from "vue";
import { ConfigurationStore } from "./store/ConfigurationStore";
import type { VariantId } from "./data/type/VariantId";

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
    <input id="my-drawer-3" v-model="drawerClose" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="w-full navbar bg-neutral sticky top-0 z-50 drop-shadow">
        <div class="flex-none">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1">Menu</div>
      </div>
      <div class="container mx-auto lg:w-3/4 p-4">
        <router-view> </router-view>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu w-80 flex flex-col pt-4 px-4 bg-neutral drop-shadow">
        <!-- <li>
          <router-link class="flex gap-4" to="/tracker" @click="closeDrawer">
            <span class="flex-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </span>
            <span class="flex-1"
              >Tracker <span class="text-primary text-xs font-semibold align-super">Experimental</span></span
            >
          </router-link>
        </li> -->
        <li>
          <router-link class="flex gap-4" to="/" @click="closeDrawer">
            <span class="flex-none">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-16 0 512 512"
                class="w-6 h-6 stroke-current fill-accent"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M106.75 215.06 1.2 370.95c-3.08 5 .1 11.5 5.93 12.14l208.26 22.07-108.64-190.1zM7.41 315.43 82.7 193.08 6.06 147.1c-2.67-1.6-6.06.32-6.06 3.43v162.81c0 4.03 5.29 5.53 7.41 2.09zM18.25 423.6l194.4 87.66c5.3 2.45 11.35-1.43 11.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23 5.59-2.2 7.57zm81.22-257.78L179.4 22.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81 110.35c-2.47 1.62-2.39 5.26.13 6.78l81.53 48.69zM240 176h109.21L253.63 7.62C250.5 2.54 245.25 0 240 0s-10.5 2.54-13.63 7.62L130.79 176H240zm233.94-28.9-76.64 45.99 75.29 122.35c2.11 3.44 7.41 1.94 7.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43zm-93.41 18.72 81.53-48.7c2.53-1.52 2.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12 4.08-10.78 11.14l79.93 142.94zm79.02 250.21L256 438.32v65.67c0 5.84 6.05 9.71 11.35 7.26l194.4-87.66c4.03-1.97 2.25-8.06-2.2-7.56zm-86.3-200.97-108.63 190.1 208.26-22.07c5.83-.65 9.01-7.14 5.93-12.14L373.25 215.06zM240 208H139.57L240 383.75 340.43 208H240z"
                />
              </svg>
            </span>
            <span class="flex-1">Randomizer</span>
          </router-link>
        </li>
        <li>
          <router-link class="flex gap-4" to="/party" @click="closeDrawer">
            <span class="flex-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-current flex-shrink-0 w-6 h-6">
                <path
                  d="M.221 16.268a15.064 15.064 0 0 0 1.789 1.9C2.008 18.111 2 18.057 2 18a5.029 5.029 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.784A2.968 2.968 0 0 1 4 9a2.988 2.988 0 0 1 5.022-2.2 5.951 5.951 0 0 1 2.022-.715 4.994 4.994 0 1 0-7.913 6.085 7.07 7.07 0 0 0-2.91 4.098zm23.558 0a7.07 7.07 0 0 0-2.91-4.1 4.994 4.994 0 1 0-7.913-6.086 5.949 5.949 0 0 1 2.022.715 2.993 2.993 0 1 1 3.614 4.74 1 1 0 0 0 .175 1.784A5.029 5.029 0 0 1 22 18c0 .057-.008.111-.01.167a15.065 15.065 0 0 0 1.789-1.899z"
                />
                <path
                  d="M18.954 20.284a7.051 7.051 0 0 0-3.085-5.114A4.956 4.956 0 0 0 17 12a5 5 0 1 0-8.869 3.17 7.051 7.051 0 0 0-3.085 5.114 14.923 14.923 0 0 0 1.968.849C7.012 21.088 7 21.046 7 21a5.031 5.031 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.785A2.964 2.964 0 0 1 9 12a3 3 0 1 1 6 0 2.964 2.964 0 0 1-1.408 2.537 1 1 0 0 0 .175 1.785A5.031 5.031 0 0 1 17 21c0 .046-.012.088-.013.133a14.919 14.919 0 0 0 1.967-.849z"
                />
              </svg>
            </span>
            <span class="flex-1">Party</span>
          </router-link>
        </li>

        <li>
          <router-link class="flex gap-4" to="/configuration" @click="closeDrawer">
            <span class="flex-none"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                viewBox="0 0 489.802 489.802"
                class="w-6 h-6 stroke-current fill-accent"
              >
                <path
                  d="m20.701 281.901 32.1.2c4.8 24.7 14.3 48.7 28.7 70.5l-22.8 22.6c-8.2 8.1-8.2 21.2-.2 29.4l24.6 24.9c8.1 8.2 21.2 8.2 29.4.2l22.8-22.6c21.6 14.6 45.5 24.5 70.2 29.5l-.2 32.1c-.1 11.5 9.2 20.8 20.7 20.9l35 .2c11.5.1 20.8-9.2 20.9-20.7l.2-32.1c24.7-4.8 48.7-14.3 70.5-28.7l22.6 22.8c8.1 8.2 21.2 8.2 29.4.2l24.9-24.6c8.2-8.1 8.2-21.2.2-29.4l-22.6-22.8c14.6-21.6 24.5-45.5 29.5-70.2l32.1.2c11.5.1 20.8-9.2 20.9-20.7l.2-35c.1-11.5-9.2-20.8-20.7-20.9l-32.1-.2c-4.8-24.7-14.3-48.7-28.7-70.5l22.8-22.6c8.2-8.1 8.2-21.2.2-29.4l-24.6-24.9c-8.1-8.2-21.2-8.2-29.4-.2l-22.8 22.6c-21.6-14.6-45.5-24.5-70.2-29.5l.2-32.1c.1-11.5-9.2-20.8-20.7-20.9l-35-.2c-11.5-.1-20.8 9.2-20.9 20.7l-.3 32.1c-24.8 4.8-48.8 14.3-70.5 28.7l-22.6-22.8c-8.1-8.2-21.2-8.2-29.4-.2l-24.8 24.6c-8.2 8.1-8.2 21.2-.2 29.4l22.6 22.8c-14.6 21.6-24.5 45.5-29.5 70.2l-32.1-.2c-11.5-.1-20.8 9.2-20.9 20.7l-.2 35c-.1 11.4 9.2 20.8 20.7 20.9zm158.6-103.3c36.6-36.2 95.5-35.9 131.7.7s35.9 95.5-.7 131.7-95.5 35.9-131.7-.7-35.9-95.5.7-131.7z"
                /></svg
            ></span>
            <span class="flex-1">Content / Variant</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>

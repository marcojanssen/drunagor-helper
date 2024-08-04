<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";

const { t, locale } = useI18n();
const router = useRouter();

const items = ref(getMenuItems());

function getMenuItems() {
  return [
    {
      label: t("menu.random-monster"),
      icon: "pi pi-question",
      command: () => {
        router.push({ name: "Home" });
      },
    },
    {
      label: t("menu.campaign"),
      icon: "pi pi-users",
      command: () => {
        router.push({ name: "Campaign Overview" });
      },
    },
    {
      label: t("menu.keyword"),
      icon: "pi pi-search",
      command: () => {
        router.push({ name: "Keyword" });
      },
    },
    {
      label: t("menu.settings"),
      icon: "pi pi-cog",
      command: () => {
        router.push({ name: "Configuration" });
      },
    },
  ];
}

watch(locale, () => {
  items.value = getMenuItems();
});
</script>

<template>
  <div class="card sticky top-0 z-20">
    <Menubar :model="items" />
  </div>
</template>

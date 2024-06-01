<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";

const { t } = useI18n();
const visible = ref(false);
const router = useRouter();

function close() {
  visible.value = false;
}

const items = ref([
  {
    label: t("menu.random-monster"),
    icon: "pi pi-question",
    command: () => {
      router.push({ name: "Home" });
      close();
    },
  },
  {
    label: t("menu.campaign"),
    icon: "pi pi-users",
    command: () => {
      router.push({ name: "Campaign Overview" });
      close();
    },
  },
  {
    label: t("menu.keyword"),
    icon: "pi pi-search",
    command: () => {
      router.push({ name: "Keyword" });
      close();
    },
  },
  {
    label: t("menu.settings"),
    icon: "pi pi-cog",
    command: () => {
      router.push({ name: "Configuration" });
      close();
    },
  },
]);
</script>

<template>
  <div class="card sticky top-0 z-20">
    <Menubar :model="items" />
  </div>
</template>

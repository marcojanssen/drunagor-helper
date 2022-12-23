import { defineStore } from "pinia";
import { ref } from "vue";

export const TrackerMenuStore = defineStore("tracker-menu", () => {
  const activeMenu = ref("main");
  const direction = ref("to");
  const history = ref([] as string[]);
  const selectedMonster = ref("");

  function canGoBack(): boolean {
    if (history.value.length > 0) {
      return true;
    }
    return false;
  }

  function goTo(newMenu: string) {
    history.value.push(activeMenu.value);

    direction.value = "to";
    activeMenu.value = newMenu;
  }

  function goBack() {
    if (canGoBack()) {
      direction.value = "back";
      const newMenu = history.value.pop();
      if (newMenu !== undefined) {
        activeMenu.value = newMenu;
      }
    }
  }

  function resetMenu() {
    history.value = [];
    direction.value = "reset";
    activeMenu.value = "main";
  }

  function selectMonster(monsterId: string) {
    selectedMonster.value = monsterId;
  }

  return {
    activeMenu,
    direction,
    history,
    selectedMonster,
    canGoBack,
    goTo,
    goBack,
    resetMenu,
    selectMonster,
  };
});

import { defineStore } from "pinia";
// import { useStorage } from "@vueuse/core";
import type { TrackedItem } from "@/store/TrackedItem";
import * as _ from "lodash-es";
import { ref } from "vue";

export const TrackerStore = defineStore("tracker", () => {
  const items = ref([] as TrackedItem[]); //useStorage("TrackerStore.characters", [] as Character[]);

  function has(id: string): boolean {
    const inStore = _.find(items.value, { id: id });
    if (inStore == undefined) {
      return false;
    }
    return true;
  }

  function find(id: string): TrackedItem {
    const character = _.find(items.value, { id: id });
    if (character == undefined) {
      throw new Error("Item could not be found: " + id);
    }
    return character;
  }

  function findAll(): TrackedItem[] {
    return items.value;
  }

  function add(trackedItem: TrackedItem) {
    if (has(trackedItem.id) === false) {
      items.value.push(trackedItem);
    }
  }

  function remove(removedItem: TrackedItem) {
    _.remove(items.value, function (item) {
      return item.id == removedItem.id;
    });
  }

  function count() {
    return items.value.length;
  }

  function reset() {
    items.value = [];
  }

  return {
    items,
    has,
    find,
    findAll,
    add,
    remove,
    count,
    reset,
  };
});

import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useInitiativeStore = defineStore("initiative", () => {
    const autoConfirmDelete = useStorage("AutoConfirmDelete", false);
    const useDefaultHp = useStorage("UseDefaultHp", true);

    const todo = () => alert('TODO');

    const addMonster = (monster:any) => todo();

    const clearInitiative = () => todo();

    return {
        // properties
        autoConfirmDelete,
        useDefaultHp,
        // methods
        addMonster,
        clearInitiative,
    };
});
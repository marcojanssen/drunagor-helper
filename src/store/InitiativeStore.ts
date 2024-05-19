// #region external imports
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
// #endregion

// #region internal imports
import { Conditions, type ICondition } from "@/data/conditions/Condition";
import { FacelessConjurer } from "@/data/content/apocalypse/monster/FacelessConjurer";
import type { ActiveMonsterData } from "@/data/store/MonsterData";
import type { HeroData } from "@/data/repository/HeroData";
// #endregion

export const useInitiativeStore = defineStore("initiative", () => {
    // #region store variables
    const autoConfirmDelete = useStorage("initiative.AutoConfirmDelete", false);
    const useDefaultHp = useStorage("initiative.UseDefaultHp", true);
    const _initiativeList = useStorage("initiative.InitiativeList", [] as any[]);
    const _heros = useStorage("initiative.Heros", {} as Record<string, HeroData>);
    const _monsterMaxHp = useStorage("initiative.MonsterMaxHp", {} as Record<string, number>);
    // #endregion

    // #region store functions
    const addHero = (dungeonRole: string, hero: HeroData) => {
        _heros.value[dungeonRole] = hero;
    };
    const addMonster = (monster: any) => {
        const maxHp = _getDefaultHp(monster);
        let newMonster = {
            ...monster,
            hp: maxHp,
            maxHp: maxHp,
            msTimestamp: Date.now(),
            conditions: JSON.parse(JSON.stringify(Conditions)),
            baseColor: _nextAvailableColor(monster),
            cardIndex: 0,
        };
        _initiativeList.value.push(newMonster);
    };
    const clearInitiative = () => {
        if (autoConfirmDelete.value || confirm("Are you sure you want to clear the initiative?")) {
            _initiativeList.value = [];
        }
    };
    const decrementCondition = (monster: ActiveMonsterData, condition: ICondition) => {
        const mIndex = _getMonsterIndex(monster);
        const cIndex = monster.conditions.findIndex((c) => c.name == condition.name);
        if (cIndex > -1 && monster.conditions[cIndex].count > 0) {
            monster.conditions[cIndex].count--;
            _initiativeList.value[mIndex] = monster;
        }
    };
    const decrementHp = (monster: any) => {
        const mIndex = _getMonsterIndex(monster);
        const newMonster = _initiativeList.value[mIndex];
        if (newMonster.hp > 1) {
            newMonster.hp -= 1;
            updateMonster(newMonster);
        } else {
            removeMonster(newMonster);
        }
    };
    const getHero = (dungeonRole: string | undefined): HeroData | null => {
        if (!dungeonRole) {
            return null;
        }
        return _heros.value[dungeonRole];
    };
    const incrementCondition = (monster: ActiveMonsterData, condition: ICondition) => {
        const mIndex = _getMonsterIndex(monster);
        const cIndex = monster.conditions.findIndex((c) => c.name == condition.name);
        if (cIndex > -1 && monster.conditions[cIndex].count < monster.conditions[cIndex].maxCount) {
            monster.conditions[cIndex].count++;
            _initiativeList.value[mIndex] = monster;
        }
    };
    const incrementHp = (monster: any) => {
        const mIndex = _getMonsterIndex(monster);
        const newMonster = _initiativeList.value[mIndex];
        if (newMonster.hp < 0) {
            newMonster.hp = 0;
        }
        if (newMonster.hp < newMonster.maxHp || confirm(`Override Max HP: ${newMonster.maxHp}`)) {
            newMonster.hp++;
            updateMonster(newMonster);
        }
    };
    const getInitiativeList = () => {
        return _initiativeList.value.sort((a, b) => {
            return b.initiative - a.initiative;
        });
    };
    const removeHero = (dungeonRole: string) => {
        delete _heros.value[dungeonRole];
    };
    const removeMonster = (monster: any) => {
        if (autoConfirmDelete.value || confirm(`Delete ${monster.name} - ${monster.baseColor}?`)) {
            const index = _getMonsterIndex(monster);
            if (index > -1) {
                _initiativeList.value.splice(index, 1);
            }
        }
    };
    const updateMonster = (monster: any) => {
        const index = _getMonsterIndex(monster);
        _initiativeList.value[index] = monster;
    };
    // #endregion

    // #region non-exported variables
    const _ringColors: any = {
        small: [
            "Yellow",
            "Navy",
            "HotPink",
            "Green",
            "FireBrick",
            "Black",
            "DarkOrange",
            "Snow",
            "Aquamarine",
            "RoyalBlue",
            "Red",
            "SaddleBrown",
        ],
        large: ["Green", "HotPink", "Navy", "Yellow"],
    };
    // #endregion

    // #region non-exported functions
    const _nextAvailableColor = (monster: any): string => {
        let ringSize = monster.size || "small";
        if (monster.name == FacelessConjurer.name) {
            ringSize = "small";
        }
        let takenColors = _initiativeList.value.filter((m) => m.size == monster.size).map((m) => m.baseColor);
        for (let color of _ringColors[ringSize]) {
            if (!takenColors.includes(color)) {
                return color;
            }
        }
        return "Black";
    };

    const _getDefaultHp = (monster: any): number => {
        let hpForMonsterName: number | null = _getDefaultHpByName(monster.name);
        let hpForMonsterColor: number | null = _getDefaultHpByColor(monster.color);
        let defaultHp: number = hpForMonsterName ?? hpForMonsterColor ?? 20;
        if (useDefaultHp.value) {
            return defaultHp;
        }
        let promptHp: number = parseInt(prompt(`Enter max HP for ${monster.name}`, defaultHp.toString()) || "");

        if (promptHp) {
            if (promptHp !== hpForMonsterName) {
                _setDefaultHpByName(monster.name, promptHp);
            }
            return promptHp;
        } else {
            _unsetDefaultHpByName(monster.name);
        }
        return hpForMonsterColor ?? 20;
    };

    const _getDefaultHpByColor = (color: string): number => {
        switch (color) {
            case "white":
                return 9;
            case "gray":
                return 12;
            case "black":
                return 15;
            default:
                return 20;
        }
    };

    const _getDefaultHpByName = (name: string): number => {
        return _monsterMaxHp.value[name];
    };

    const _getMonsterIndex = (monster: any): number => {
        return _initiativeList.value.findIndex((m) => m.msTimestamp == monster.msTimestamp);
    };

    const _setDefaultHpByName = (name: string, hp: number): void => {
        _monsterMaxHp.value[name] = hp;
    };

    const _unsetDefaultHpByName = (name: string): void => {
        delete _monsterMaxHp.value[name];
    };

    // #endregion

    return {
        // properties
        autoConfirmDelete,
        useDefaultHp,
        // functions
        addHero,
        addMonster,
        clearInitiative,
        decrementCondition,
        decrementHp,
        getHero,
        getInitiativeList,
        incrementCondition,
        incrementHp,
        removeHero,
        removeMonster,
        updateMonster,
    };
});
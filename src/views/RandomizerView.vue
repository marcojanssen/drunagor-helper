<script setup lang="ts">
import { VariantStore } from "@/store/VariantStore";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { RandomMonster } from "@/entity/RandomMonster";
import type { RandomCommander } from "@/entity/RandomCommander";
import { RandomizeMonster } from "@/service/RandomizeMonster";
import { RandomizeCommander } from "@/service/RandomizeCommander";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n";
import SwappableImage from "@/components/SwappableImage.vue";
import RandomizerTitle from "@/assets/Randomizer.webp";
import backgroundImage from "@/assets/monster/big/Background.webp";
import RandomizerQuickSelect from "@/components/RandomizerQuickSelect.vue";

const toast = useToast();
const { t } = useI18n();

const name = ref(t("randomizer.random_monster"));
const variant = ref("");
const currentCharacterId = ref("");
const frontImage = ref(RandomizerTitle.toString());
const backImage = ref("");
const excludeCurrentCharacter = ref(true);

const variantStore = VariantStore();

function getExcludedCharacters(): string[] {
  let excludedCharacters: string[] = [];
  if (excludeCurrentCharacter.value) {
    excludedCharacters = [currentCharacterId.value];
  }
  return excludedCharacters;
}

function getRandomMonster(color: MonsterColor) {
  let monster: RandomMonster | null = new RandomizeMonster().randomizeByColor(color, getExcludedCharacters());

  if (monster === null) {
    toast.error(t("randomizer.error.no_other_monster_available"));
    return;
  }

  currentCharacterId.value = monster.id;
  name.value = monster.name;
  variant.value = t(variantStore.find(monster.getRandomVariant()).translation_key);
  frontImage.value = monster.image.main;
  backImage.value = monster.image.miniature;
}

function getRandomCommander() {
  let commander: RandomCommander | null = new RandomizeCommander().randomize(getExcludedCharacters());

  if (commander === null) {
    toast.error(t("randomizer.error.no_other_commander_available"));
    return;
  }

  currentCharacterId.value = commander.id;
  name.value = commander.name;
  variant.value = t("randomizer.commander");
  if (commander.id === "demon-lord" || commander.id === "fallen-sisters") {
    variant.value = t("randomizer.overlord");
  }

  frontImage.value = commander.image.main;
  backImage.value = commander.image.miniature;
}
</script>

<template>
  <div class="grid grid-cols-1 gap-4 place-items-center">
    <RandomizerQuickSelect />
    <SwappableImage
      :title="name"
      :sub-title="variant"
      :background="backgroundImage"
      :frontImage="frontImage"
      :backImage="backImage"
    />
    <div class="grid grid-cols-1 gap-4 place-items-center">
      <label class="cursor-pointer">
        <span class="text-md pr-4">{{ $t("randomizer.exclude_current_monster") }}</span>
        <input
          type="checkbox"
          id="randomizer-exclude-current-character"
          v-model="excludeCurrentCharacter"
          class="w-5 h-5 text-emerald-500 bg-base-100 rounded"
        />
      </label>
    </div>
    <div class="grid grid-flow-col auto-cols-max gap-2">
      <div>
        <button
          class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg active:bg-emerald-500"
          @click="getRandomMonster('white')"
        >
          {{ $t("randomizer.white") }}
        </button>
      </div>
      <div>
        <button
          class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg active:bg-emerald-500"
          @click="getRandomMonster('gray')"
        >
          {{ $t("randomizer.gray") }}
        </button>
      </div>
      <div>
        <button
          class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg active:bg-emerald-500"
          @click="getRandomMonster('black')"
        >
          {{ $t("randomizer.black") }}
        </button>
      </div>
      <div>
        <button
          class="px-3 py-3 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg active:bg-emerald-500"
          @click="getRandomCommander()"
        >
          {{ $t("randomizer.commander") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

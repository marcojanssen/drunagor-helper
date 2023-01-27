<script setup lang="ts">
import { VariantStore } from "@/store/VariantStore";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { RandomMonster } from "@/entity/RandomMonster";
import type { RandomCommander } from "@/entity/RandomCommander";
import { RandomizeMonster } from "@/service/RandomizeMonster";
import { RandomizeCommander } from "@/service/RandomizeCommander";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import SwappableImage from "@/components/SwappableImage.vue";
import RandomizerTitle from "@/assets/Randomizer.webp";
import backgroundImage from "@/assets/monster/big/Background.webp";

const toast = useToast();

const name = ref("Randomizer");
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
    toast.error("No other monster available.");
    return;
  }

  currentCharacterId.value = monster.id;
  name.value = monster.name;
  variant.value = variantStore.find(monster.getRandomVariant()).title;
  frontImage.value = monster.image.main;
  backImage.value = monster.image.miniature;
}

function getRandomCommander() {
  let commander: RandomCommander | null = new RandomizeCommander().randomize(getExcludedCharacters());

  if (commander === null) {
    toast.error("No other commander available.");
    return;
  }

  currentCharacterId.value = commander.id;
  name.value = commander.name;
  variant.value = "Commander";
  frontImage.value = commander.image.main;
  backImage.value = commander.image.miniature;
}
</script>

<template>
  <div class="grid grid-cols-1 gap-4 place-items-center">
    <SwappableImage
      :title="name"
      :sub-title="variant"
      :background="backgroundImage"
      :frontImage="frontImage"
      :backImage="backImage"
    />
    <div class="form-control py-4 w-72">
      <label class="cursor-pointer">
        <span class="text-md pr-4">Exclude current drawn character</span>
        <input
          type="checkbox"
          v-model="excludeCurrentCharacter"
          class="w-5 h-5 text-emerald-500 bg-neutral rounded shadow border-transparent focus:border-transparent focus:ring-0"
        />
      </label>
    </div>
    <div class="grid grid-flow-col auto-cols-max gap-2">
      <div>
        <button
          class="px-3 py-3 bg-neutral text-gray-200 font-semibold text-sm rounded-lg active:bg-emerald-500"
          @click="getRandomMonster('white')"
        >
          WHITE
        </button>
      </div>
      <div>
        <button
          class="px-3 py-3 bg-neutral text-gray-200 font-semibold text-sm rounded-lg active:bg-emerald-500"
          @click="getRandomMonster('gray')"
        >
          GRAY
        </button>
      </div>
      <div>
        <button
          class="px-3 py-3 bg-neutral text-gray-200 font-semibold text-sm rounded-lg active:bg-emerald-500"
          @click="getRandomMonster('black')"
        >
          BLACK
        </button>
      </div>
      <div>
        <button
          class="px-3 py-3 bg-neutral text-gray-200 font-semibold text-sm rounded-lg active:bg-emerald-500"
          @click="getRandomCommander()"
        >
          COMMANDER
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

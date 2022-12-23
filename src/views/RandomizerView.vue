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

function getRandomMonster(color: MonsterColor) {
  let excludedMonsters: string[] = [];
  if (excludeCurrentCharacter.value) {
    excludedMonsters = [currentCharacterId.value];
  }
  let monster: RandomMonster | null = new RandomizeMonster().randomizeByColor(color, excludedMonsters);

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
  let excludedCommander: string[] = [];
  if (excludeCurrentCharacter.value) {
    excludedCommander = [currentCharacterId.value];
  }

  let commander: RandomCommander | null = new RandomizeCommander().randomize(excludedCommander);

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
    <div class="form-control w-72">
      <label class="label cursor-pointer">
        <span class="text-md">Exclude current drawn character</span>
        <input type="checkbox" v-model="excludeCurrentCharacter" class="checkbox checkbox-neutral" />
      </label>
    </div>
    <div class="grid grid-flow-col auto-cols-max gap-2">
      <div>
        <button class="btn p-2" @click="getRandomMonster('white')">White</button>
      </div>
      <div>
        <button class="btn p-2" @click="getRandomMonster('gray')">Gray</button>
      </div>
      <div>
        <button class="btn p-2" @click="getRandomMonster('black')">Black</button>
      </div>
      <div>
        <button class="btn p-2" @click="getRandomCommander()">Commander</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

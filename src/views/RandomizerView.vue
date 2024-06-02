<script setup lang="ts">
import { VariantStore } from "@/store/VariantStore";
import type { MonsterColor } from "@/data/type/MonsterColor";
import type { RandomMonster } from "@/entity/RandomMonster";
import type { RandomCommander } from "@/entity/RandomCommander";
import { RandomizeMonster } from "@/service/RandomizeMonster";
import { RandomizeCommander } from "@/service/RandomizeCommander";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";
import SwappableImage from "@/components/SwappableImage.vue";
import RandomizerTitle from "@/assets/Randomizer.webp";
import backgroundImage from "@/assets/monster/big/Background.webp";
import RandomizerQuickSelect from "@/components/RandomizerQuickSelect.vue";
import BaseButtonMenu from "@/components/BaseButtonMenu.vue";

const toast = useToast();
const { t } = useI18n();

const name = ref(t("randomizer.random-monster"));
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
    toast.add({
      severity: "error",
      summary: "Error",
      detail: t("randomizer.error.no-other-monster-available"),
      life: 3000,
    });
    return;
  }

  currentCharacterId.value = monster.id;
  name.value = t(monster.translation_key);
  variant.value = t(variantStore.find(monster.getRandomVariant()).translation_key);
  frontImage.value = monster.image.main;
  backImage.value = monster.image.miniature;
}

function getRandomCommander() {
  let commander: RandomCommander | null = new RandomizeCommander().randomize(getExcludedCharacters());

  if (commander === null) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: t("randomizer.error.no-other-commander-available"),
      life: 3000,
    });
    return;
  }

  currentCharacterId.value = commander.id;
  name.value = t(commander.translation_key);
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
    <label class="cursor-pointer">
      <span class="text-md pr-4">{{ $t("randomizer.exclude-current-monster") }}</span>
      <Checkbox v-model="excludeCurrentCharacter" :binary="true" inputId="randomizer-exclude-current-character" />
    </label>
    <BaseButtonMenu>
      <Button outlined :label="$t('randomizer.white')" @click="getRandomMonster('white')" />
      <Button outlined :label="$t('randomizer.gray')" @click="getRandomMonster('gray')" />
      <Button outlined :label="$t('randomizer.black')" @click="getRandomMonster('black')" />
      <Button outlined :label="$t('randomizer.commander')" @click="getRandomCommander()" />
    </BaseButtonMenu>
  </div>
</template>

<style scoped></style>

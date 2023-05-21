<script setup lang="ts">
import { ref, watch } from "vue";
import { HeroStore } from "@/store/HeroStore";
import BaseModal from "@/components/BaseModal.vue";
import BaseList from "@/components/BaseList.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import { CubeIcon, XMarkIcon } from "@heroicons/vue/24/solid";

const heroStore = HeroStore();

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();

const isOpen = ref(false);
const selectedSkillId = ref("");

const cubeColors: Array<string> = ["Yellow", "Red", "Green", "Blue"];

const skills = [
  { id: "dungeon-role", name: "Dungeon Role" },
  { id: "melee", name: "Melee" },
  { id: "ranged", name: "Ranged" },
  { id: "agility", name: "Agility" },
  { id: "wisdom", name: "Wisdom" },
];
const hero = heroStore.findInCampaign(props.heroId, props.campaignId);
const selectedSkills = ref([] as string[]);
if (typeof hero.skillIds === "undefined") hero.skillIds = [];
hero.skillIds.forEach((s) => selectedSkills.value.push(s));

if (typeof hero.dungeonRoleSkillCubeColors === "undefined") {
  hero.dungeonRoleSkillCubeColors = {
    rankOne: null,
    rankTwo: null,
  };
}

function getSkillLabel(skillId: string, level: number): string {
  if (!skillId.startsWith("dungeon-role")) {
    return `Level ${level}`;
  }

  const selectedCubes = heroStore.findInCampaign(props.heroId, props.campaignId).dungeonRoleSkillCubeColors;
  const selectedCube = level === 1 ? selectedCubes.rankOne : selectedCubes.rankTwo;

  return selectedCube !== null ? `Level ${level} (${selectedCube})` : `Level ${level}`;
}

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}

function onSkillSelect(skillId: string) {
  if (!skillId.startsWith("dungeon-role")) {
    return;
  }

  const wasSelected = selectedSkills.value.filter((selectedSkillId) => selectedSkillId === skillId).length > 0;
  if (!wasSelected) {
    clearCubeColor(skillId);
    return;
  }

  selectedSkillId.value = skillId;
  openModal();
}

function clearCubeColor(skillId: string) {
  if (skillId === "dungeon-role-1") {
    heroStore.findInCampaign(props.heroId, props.campaignId).dungeonRoleSkillCubeColors.rankOne = null;
  } else if (skillId === "dungeon-role-2") {
    heroStore.findInCampaign(props.heroId, props.campaignId).dungeonRoleSkillCubeColors.rankTwo = null;
  }
}

function setSelectedCubeColor(color: string) {
  if (selectedSkillId.value === "dungeon-role-1") {
    heroStore.findInCampaign(props.heroId, props.campaignId).dungeonRoleSkillCubeColors.rankOne = color;
  } else if (selectedSkillId.value === "dungeon-role-2") {
    heroStore.findInCampaign(props.heroId, props.campaignId).dungeonRoleSkillCubeColors.rankTwo = color;
  }
  closeModal();
}

watch(selectedSkills, (newSkills) => {
  heroStore.findInCampaign(props.heroId, props.campaignId).skillIds = newSkills;
});
</script>

<template>
  <div class="w-full skill-container">
    <div v-for="skill in skills" :key="skill.id" class="skill">
      <h3>{{ skill.name }}</h3>
      <div v-for="level in 2" :key="skill.name + '-' + level">
        <label :key="skill.id + '-' + level">
          <input
            type="checkbox"
            v-model="selectedSkills"
            :id="skill.id + '-' + level"
            :value="skill.id + '-' + level"
            class="w-5 h-5 text-emerald-500 bg-base-100 rounded"
            @change="() => onSkillSelect(skill.id + '-' + level)"
          />
          <span class="ml-1 skill-label">{{ getSkillLabel(skill.id + "-" + level, level) }}</span>
        </label>
      </div>
    </div>
  </div>

  <BaseModal :is-open="isOpen" @close-modal="closeModal">
    <template #header>
      <div class="grid grid-cols-2">
        <div class="w-full font-medium place-self-center">Select action cube color</div>
        <div>
          <button
            id="close-modal"
            class="px-2 py-2 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg float-right"
            @click="closeModal"
          >
            <XMarkIcon class="h-5 bg-neutral text-gray-200 uppercase font-semibold text-sm rounded-lg" />
          </button>
        </div>
      </div>
    </template>
    <template #default>
      <BaseList id="campaign-add-heroes">
        <template v-for="color in cubeColors" :key="color">
          <BaseListItem @click="setSelectedCubeColor(color)">
            <div class="bg-neutral flex pt-3 pb-2 pl-3 w-full rounded-lg">
              <CubeIcon :class="'h-5 w-5 ' + color.toLowerCase()" />
              <span class="ml-2">{{ color }}</span>
            </div>
          </BaseListItem>
        </template>
      </BaseList>
    </template>
  </BaseModal>
</template>

<style scoped>
.skill-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0.5em;
}

.yellow {
  color: #ffeb3b;
}

.red {
  color: #f44336;
}

.green {
  color: #4caf50;
}

.blue {
  color: #2196f3;
}
</style>

<script setup lang="ts">
import { ref, watch } from "vue";
import { HeroStore } from "@/store/HeroStore";
import BaseList from "@/components/BaseList.vue";
import BaseListItem from "@/components/BaseListItem.vue";
import { CubeIcon } from "@heroicons/vue/24/solid";
import { useI18n } from "vue-i18n";

const heroStore = HeroStore();

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();

const visible = ref(false);
const selectedSkillId = ref("");
const { t } = useI18n();

const cubeColors: Array<string> = ["Yellow", "Red", "Green", "Blue"];

const skills = [
  { id: "dungeon-role", name: "Dungeon Role", translationKey: "label.dungeon-role" },
  { id: "melee", name: "Melee", translationKey: "label.melee" },
  { id: "ranged", name: "Ranged", translationKey: "label.ranged" },
  { id: "agility", name: "Agility", translationKey: "label.agility" },
  { id: "wisdom", name: "Wisdom", translationKey: "label.wisdom" },
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
    return `${t("label.level")} ${level}`;
  }

  const selectedCubes = heroStore.findInCampaign(props.heroId, props.campaignId).dungeonRoleSkillCubeColors;
  const selectedCube = level === 1 ? selectedCubes.rankOne : selectedCubes.rankTwo;

  return selectedCube !== null
    ? `${t("label.level")} ${level} (${t("label." + selectedCube.toLowerCase())})`
    : `${t("label.level")} ${level}`;
}

function openModal() {
  visible.value = true;
}

function closeModal() {
  visible.value = false;
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
      <h3>{{ t(skill.translationKey) }}</h3>
      <div v-for="level in 2" :key="skill.name + '-' + level">
        <label :key="skill.id + '-' + level">
          <Checkbox
            variant="outlined"
            :data-testid="skill.id + '-' + level"
            v-model="selectedSkills"
            :value="skill.id + '-' + level"
            @change="() => onSkillSelect(skill.id + '-' + level)"
          />
          <span class="ml-1 skill-label">{{ getSkillLabel(skill.id + "-" + level, level) }}</span>
        </label>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="visible"
    modal
    :header="t('text.select-action-cube-color')"
    :dismissableMask="true"
    class="w-full md:w-1/3 m-2"
  >
    <BaseList>
      <template v-for="color in cubeColors" :key="color">
        <BaseListItem @click="setSelectedCubeColor(color)">
          <div class="flex pt-3 pb-2 pl-3 w-full rounded-lg">
            <CubeIcon :class="'h-5 w-5 ' + color.toLowerCase()" />
            <span class="ml-2">{{ t("label." + color.toLowerCase()) }}</span>
          </div>
        </BaseListItem>
      </template>
    </BaseList>
  </Dialog>
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

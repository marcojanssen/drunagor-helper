<script setup lang="ts">
import { ref, watch } from "vue";
import { HeroStore } from "@/store/HeroStore";

const heroStore = HeroStore();

const props = defineProps<{
  heroId: string;
  campaignId: string;
}>();

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

watch(selectedSkills, (newSkills) => {
  heroStore.findInCampaign(props.heroId, props.campaignId).skillIds = newSkills;
});
</script>

<template>
  <div class="w-full skill-container">
    <div v-for="skill in skills" :key="skill.id" class="skill">
      <h3>{{ skill.name }}</h3>
      <div>
        <label :key="skill.id + '-1'">
          <input
            type="checkbox"
            v-model="selectedSkills"
            :id="skill.id + '-1'"
            :value="skill.id + '-1'"
            class="w-5 h-5 text-emerald-500 bg-base-100 rounded shadow border-transparent focus:border-transparent focus:ring-0"
          />
          <span class="ml-1">Level 1</span>
        </label>
      </div>
      <div>
        <label :key="skill + '-2'">
          <input
            type="checkbox"
            v-model="selectedSkills"
            :id="skill.id + '-2'"
            :value="skill.id + '-2'"
            class="w-5 h-5 text-emerald-500 bg-base-100 rounded shadow border-transparent focus:border-transparent focus:ring-0"
          />
          <span class="ml-1">Level 2</span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0.5em;
}
</style>

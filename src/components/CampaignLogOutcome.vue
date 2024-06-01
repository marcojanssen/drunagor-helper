<script setup lang="ts">
import { ref, watch } from "vue";
import type { Outcome } from "@/data/repository/campaign/Outcome";
import { HeroStore } from "@/store/HeroStore";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import { ConfigurationStore } from "@/store/ConfigurationStore";
import MultiSelect from "primevue/multiselect";

const props = defineProps<{
  heroId: string;
  campaignId: string;
  repository: OutcomeRepository;
}>();

const heroStore = HeroStore();
const configurationStore = ConfigurationStore();
props.repository.load(configurationStore.enabledLanguage);

const outcomes = props.repository.findAll();

const outcomeIds = ref([] as string[]);
outcomeIds.value = heroStore.findInCampaign(props.heroId, props.campaignId).outcomeIds ?? [];

function findOutcomes(outcomeIds: string[]): Outcome[] {
  const outcomes: Outcome[] = [];
  outcomeIds.forEach((outcomeId) => {
    let outcome = props.repository.find(outcomeId);
    if (outcome) {
      outcomes.push(outcome);
    }
  });

  return outcomes;
}

watch(outcomeIds, (newOutcomeIds) => {
  heroStore.findInCampaign(props.heroId, props.campaignId).outcomeIds = newOutcomeIds;
});
</script>

<template>
  <span :data-testid="'campaign-log-outcome-' + heroId">
    <MultiSelect
      v-model="outcomeIds"
      :options="outcomes"
      :maxSelectedLabels="1"
      filter
      optionLabel="name"
      optionValue="id"
      :placeholder="$t('text.add-or-remove-outcome')"
      class="w-full md:w-14rem"
    />
    <template v-if="outcomeIds.length > 0">
      <p class="text-sm text-gray-500 py-2">
        {{ $t("text.outcome-info") }}
      </p>
      <template v-for="outcome in findOutcomes(outcomeIds)" :key="outcome.id">
        <ul id="campaign-log-outcome-display" class="list-disc list-inside">
          <li>
            {{ outcome.name }}
            <span class="px-4 block" v-if="outcome.effect">
              {{ outcome.effect }}
            </span>
          </li>
        </ul>
      </template>
    </template>
  </span>
</template>

<style scoped></style>

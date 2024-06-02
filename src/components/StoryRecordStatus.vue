<script setup lang="ts">
import { ref, watch } from "vue";
import type { Status } from "@/data/repository/campaign/Status";
import type { StatusRepository } from "@/data/repository/campaign/StatusRepository";
import { CampaignStore } from "@/store/CampaignStore";
import { useI18n } from "vue-i18n";
import { ConfigurationStore } from "@/store/ConfigurationStore";

const props = defineProps<{
  campaignId: string;
  repository: StatusRepository;
}>();

const campaignStore = CampaignStore();
const configurationStore = ConfigurationStore();
const { t } = useI18n();
props.repository.load(configurationStore.enabledLanguage);

const statuses = props.repository.findAll();

const statusIds = ref([] as string[]);
statusIds.value = campaignStore.find(props.campaignId).statusIds ?? [];

function findStatuses(statusIds: string[]): Status[] {
  const statuses: Status[] = [];
  statusIds.forEach((statusId) => {
    let status = props.repository.find(statusId);
    if (status) {
      statuses.push(status);
    }
  });

  return statuses;
}

watch(statusIds, (newStatusIds) => {
  campaignStore.find(props.campaignId).statusIds = newStatusIds;
});
</script>

<template>
  <span data-testid="story-record-status">
    <MultiSelect
      v-model="statusIds"
      :options="statuses"
      :maxSelectedLabels="1"
      filter
      optionLabel="name"
      optionValue="id"
      :placeholder="$t('text.add-or-remove-status')"
      class="w-full md:w-14rem"
    />
    <template v-if="statusIds.length > 0">
      <p class="text-sm text-gray-500 py-2">{{ t("text.status-info") }}</p>
      <template v-for="status in findStatuses(statusIds)" :key="status.id">
        <ul class="list-disc list-inside pt-2">
          <li>
            {{ status.name }}
            <span class="px-4 block" v-if="status.effect">
              {{ status.effect }}
            </span>
          </li>
        </ul>
      </template>
    </template>
  </span>
</template>

<style scoped></style>

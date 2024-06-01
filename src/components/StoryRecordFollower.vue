<script setup lang="ts">
import { ref, watch } from "vue";
import type { FollowerRepository } from "@/data/repository/campaign/FollowerRepository";
import { CampaignStore } from "@/store/CampaignStore";
import type { Follower } from "@/data/repository/campaign/Follower";

const props = defineProps<{
  campaignId: string;
  repository: FollowerRepository;
}>();

const campaignStore = CampaignStore();

const followers = props.repository.findAll();

const followerIds = ref([] as string[]);
followerIds.value = campaignStore.find(props.campaignId).followerIds ?? [];

function findFollowers(followerIds: string[]): Follower[] {
  const followers: Follower[] = [];
  followerIds.forEach((followerId) => {
    let follower = props.repository.find(followerId);
    if (follower) {
      followers.push(follower);
    }
  });

  return followers;
}

watch(followerIds, (newFollowerIds) => {
  campaignStore.find(props.campaignId).followerIds = newFollowerIds;
});
</script>

<template>
  <span data-testid="story-record-follower">
    <MultiSelect
      v-model="followerIds"
      :options="followers"
      :maxSelectedLabels="1"
      filter
      optionLabel="name"
      optionValue="id"
      :placeholder="$t('text.add-or-remove-follower')"
      class="w-full md:w-14rem"
    />
    <template v-if="followerIds.length > 0">
      <template v-for="follower in findFollowers(followerIds)" :key="follower.id">
        <ul class="list-disc list-inside pt-2">
          <li>
            {{ follower.name }}
          </li>
        </ul>
      </template>
    </template>
  </span>
</template>

<style scoped></style>

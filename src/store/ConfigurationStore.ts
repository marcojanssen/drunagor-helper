import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

import type { ContentId } from "@/data/type/ContentId";
import type { VariantId } from "@/data/type/VariantId";

export const ConfigurationStore = defineStore("configuration", () => {
  const enabledMonsterContent = useStorage("ContentStore.enabled", ["core"] as ContentId[]);
  const enabledHeroContent = useStorage("ContentStore.enabled.hero", [
    "core",
    "spoils-of-war",
    "desert-of-hellscar",
    "rise-of-the-undead-dragon",
    "handuriel",
    "lordwrath",
  ] as ContentId[]);
  const enabledVariants = useStorage("VariantStore.enabled", ["standard"] as VariantId[]);

  function getEnabledMonsterContent(): ContentId[] {
    return enabledMonsterContent.value;
  }

  function getEnabledHeroContent(): ContentId[] {
    return enabledHeroContent.value;
  }

  function getEnabledVariants(): VariantId[] {
    return enabledVariants.value;
  }

  function isEnabledMonsterContent(contentId: ContentId): boolean {
    return enabledMonsterContent.value.includes(contentId);
  }

  function isEnabledHeroContent(contentId: ContentId): boolean {
    return enabledHeroContent.value.includes(contentId);
  }

  function isEnabledVariant(variantId: VariantId): boolean {
    return enabledVariants.value.includes(variantId);
  }

  return {
    enabledMonsterContent,
    enabledHeroContent,
    enabledVariants,
    getEnabledMonsterContent,
    getEnabledHeroContent,
    getEnabledVariants,
    isEnabledMonsterContent,
    isEnabledHeroContent,
    isEnabledVariant,
  };
});

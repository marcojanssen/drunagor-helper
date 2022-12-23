import * as _ from "lodash-es";
import { defineStore } from "pinia";

import { BlessingofGoodFortune } from "@/data/content/core/aura/BlessingofGoodFortune";
import { BlessingoftheGuardian } from "@/data/content/core/aura/BlessingoftheGuardian";
import { Bloodlust } from "@/data/content/core/aura/Bloodlust";
import { Bonding } from "@/data/content/core/aura/Bonding";
import { BoonofEmpathy } from "@/data/content/core/aura/BoonofEmpathy";
import { BoonofGratitude } from "@/data/content/core/aura/BoonofGratitude";
import { BraveHearted } from "@/data/content/core/aura/BraveHearted";
import { ClearConscious } from "@/data/content/core/aura/ClearConscious";
import { ColdHearted } from "@/data/content/core/aura/ColdHearted";
import { Determined } from "@/data/content/core/aura/Determined";
import { Disdained } from "@/data/content/core/aura/Disdained";
import { Grandeur } from "@/data/content/core/aura/Grandeur";
import { Hellbent } from "@/data/content/core/aura/Hellbent";
import { InspiringLeadership } from "@/data/content/core/aura/InspiringLeadership";
import { Intoxicated } from "@/data/content/core/aura/Intoxicated";
import { MurderousIntent } from "@/data/content/core/aura/MurderousIntent";
import { OvertheEdge } from "@/data/content/core/aura/OvertheEdge";
import { SoulmatesReunited } from "@/data/content/core/aura/SoulmatesReunited";
import { Spellshock } from "@/data/content/core/aura/Spellshock";
import { TrueheartedBlessing } from "@/data/content/core/aura/TrueheartedBlessing";
import { WellMeaning } from "@/data/content/core/aura/WellMeaning";
import type { AuraData } from "@/data/store/AuraData";

export const AuraDataStore = defineStore("data-aura", () => {
  const auras = [
    new BlessingofGoodFortune(),
    new BlessingoftheGuardian(),
    new Bloodlust(),
    new Bonding(),
    new BoonofEmpathy(),
    new BoonofGratitude(),
    new BraveHearted(),
    new ClearConscious(),
    new ColdHearted(),
    new Disdained(),
    new Determined(),
    new Grandeur(),
    new Hellbent(),
    new InspiringLeadership(),
    new Intoxicated(),
    new MurderousIntent(),
    new OvertheEdge(),
    new SoulmatesReunited(),
    new Spellshock(),
    new TrueheartedBlessing(),
    new WellMeaning(),
  ];

  function find(auraId: string): AuraData | undefined {
    return _.find(auras, { id: auraId });
  }

  function findAll(): AuraData[] {
    return auras;
  }

  return {
    auras,
    find,
    findAll,
  };
});

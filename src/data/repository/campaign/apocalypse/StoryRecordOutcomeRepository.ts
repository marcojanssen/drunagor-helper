import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class StoryRecordOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    { id: "a-good-deal", name: "A Good Deal", effect: "" },
    { id: "beautiful-lie", name: "Beautiful Lie", effect: "" },
    { id: "broken", name: "Broken", effect: "" },
    { id: "exquisite-friends", name: "Exquisite Friends", effect: "" },
    { id: "friendly-advice", name: "Friendly Advice", effect: "" },
    { id: "gal-s-fate", name: "Gal's Fate", effect: "" },
    { id: "hellscarian-ally", name: "Hellscarian Ally", effect: "" },
    { id: "hellscarian-enemy", name: "Hellscarian Enemy", effect: "" },
    { id: "hero-s-journey", name: "Hero's Journey", effect: "" },
    { id: "humbled", name: "Humbled", effect: "" },
    { id: "impostor", name: "Impostor", effect: "" },
    { id: "insured-trip", name: "Insured Trip", effect: "" },
    { id: "late-guests", name: "Late Guests", effect: "" },
    { id: "long-live", name: "Long Live!", effect: "" },
    {
      id: "luccanor-s-redemption",
      name: "Luccanor's Redemption",
      effect: "",
    },
    { id: "misery-ended", name: "Misery Ended", effect: "" },
    { id: "mob-justice", name: "Mob Justice", effect: "" },
    { id: "no-quarter-given", name: "No Quarter Given", effect: "" },
    { id: "possessed", name: "Possessed", effect: "" },
    { id: "scarce-provisions", name: "Scarce Provisions", effect: "" },
    { id: "shattered-dreams", name: "Shattered Dreams", effect: "" },
    { id: "strong-bonds", name: "Strong Bonds", effect: "" },
    {
      id: "the-duke-s-betrayal",
      name: "The Duke's Betrayal",
      effect: "",
    },
    {
      id: "the-earl-of-blackriver",
      name: "The Earl of Blackriver",
      effect: "",
    },
    { id: "triumphant", name: "Triumphant", effect: "" },
    {
      id: "truthful",
      name: "Truthful",
      effect:
        "Heroes hit with Weapon attack and succeed on Skill Challenges whenever they roll 1 on the d20. Each Hero that also has a Class Ability that turns their natural 1 rolls into Weapon attack hits also scores a Critical Hit on these attacks.",
    },
    { id: "umbralian-ally", name: "Umbralian Ally", effect: "" },
    { id: "umbralian-enemy", name: "Umbralian Enemy", effect: "" },
    { id: "unbroken", name: "Unbroken", effect: "" },
    { id: "uncertain-journey", name: "Uncertain Journey", effect: "" },
    { id: "wounded-eye", name: "Wounded Eye", effect: "" },
    { id: "wounded-paw", name: "Wounded Paw", effect: "" },
  ];

  public find(outcomeId: string): Outcome | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): Outcome[] {
    return this.outcomes;
  }
}

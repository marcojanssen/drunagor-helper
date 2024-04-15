import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class StoryRecordOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "a-good-deal",
      name: "A Good Deal",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.a-good-deal",
    },
    {
      id: "beautiful-lie",
      name: "Beautiful Lie",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.beautiful-lie",
    },
    {
      id: "broken",
      name: "Broken",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.broken",
    },
    {
      id: "exquisite-friends",
      name: "Exquisite Friends",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.exquisite-friends",
    },
    {
      id: "friendly-advice",
      name: "Friendly Advice",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.friendly-advice",
    },
    {
      id: "gal-s-fate",
      name: "Gal's Fate",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.gal-s-fate",
    },
    {
      id: "hellscarian-ally",
      name: "Hellscarian Ally",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.hellscarian-ally",
    },
    {
      id: "hellscarian-enemy",
      name: "Hellscarian Enemy",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.hellscarian-enemy",
    },
    {
      id: "hero-s-journey",
      name: "Hero's Journey",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.hero-s-journey",
    },
    {
      id: "humbled",
      name: "Humbled",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.humbled",
    },
    {
      id: "impostor",
      name: "Impostor",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.impostor",
    },
    {
      id: "insured-trip",
      name: "Insured Trip",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.insured-trip",
    },
    {
      id: "late-guests",
      name: "Late Guests",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.late-guests",
    },
    {
      id: "long-live",
      name: "Long Live!",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.long-live",
    },
    {
      id: "luccanor-s-redemption",
      name: "Luccanor's Redemption",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.luccanor-s-redemption",
    },
    {
      id: "misery-ended",
      name: "Misery Ended",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.misery-ended",
    },
    {
      id: "mob-justice",
      name: "Mob Justice",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.mob-justice",
    },
    {
      id: "no-quarter-given",
      name: "No Quarter Given",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.no-quarter-given",
    },
    {
      id: "possessed",
      name: "Possessed",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.possessed",
    },
    {
      id: "scarce-provisions",
      name: "Scarce Provisions",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.scarce-provisions",
    },
    {
      id: "shattered-dreams",
      name: "Shattered Dreams",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.shattered-dreams",
    },
    {
      id: "strong-bonds",
      name: "Strong Bonds",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.strong-bonds",
    },
    {
      id: "the-duke-s-betrayal",
      name: "The Duke's Betrayal",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.the-duke-s-betrayal",
    },
    {
      id: "the-earl-of-blackriver",
      name: "The Earl of Blackriver",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.the-earl-of-blackriver",
    },
    {
      id: "triumphant",
      name: "Triumphant",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.triumphant",
    },
    {
      id: "truthful",
      name: "Truthful",
      effect:
        "Heroes hit with Weapon attack and succeed on Skill Challenges whenever they roll 1 on the d20. Each Hero that also has a Class Ability that turns their natural 1 rolls into Weapon attack hits also scores a Critical Hit on these attacks.",
      translationKey: "outcome.apocalypse.storyrecord.truthful",
    },
    {
      id: "umbralian-ally",
      name: "Umbralian Ally",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.umbralian-ally",
    },
    {
      id: "umbralian-enemy",
      name: "Umbralian Enemy",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.umbralian-enemy",
    },
    {
      id: "unbroken",
      name: "Unbroken",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.unbroken",
    },
    {
      id: "uncertain-journey",
      name: "Uncertain Journey",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.uncertain-journey",
    },
    {
      id: "wounded-eye",
      name: "Wounded Eye",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.wounded-eye",
    },
    {
      id: "wounded-paw",
      name: "Wounded Paw",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.wounded-paw",
    },
  ];

  public find(outcomeId: string): Outcome | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): Outcome[] {
    return this.outcomes;
  }
}

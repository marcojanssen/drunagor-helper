import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class StoryRecordOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "a-good-deal",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.a-good-deal",
    },
    {
      id: "beautiful-lie",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.beautiful-lie",
    },
    {
      id: "broken",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.broken",
    },
    {
      id: "exquisite-friends",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.exquisite-friends",
    },
    {
      id: "friendly-advice",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.friendly-advice",
    },
    {
      id: "gal-s-fate",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.gal-s-fate",
    },
    {
      id: "hellscarian-ally",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.hellscarian-ally",
    },
    {
      id: "hellscarian-enemy",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.hellscarian-enemy",
    },
    {
      id: "hero-s-journey",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.hero-s-journey",
    },
    {
      id: "humbled",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.humbled",
    },
    {
      id: "impostor",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.impostor",
    },
    {
      id: "insured-trip",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.insured-trip",
    },
    {
      id: "late-guests",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.late-guests",
    },
    {
      id: "long-live",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.long-live",
    },
    {
      id: "luccanor-s-redemption",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.luccanor-s-redemption",
    },
    {
      id: "misery-ended",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.misery-ended",
    },
    {
      id: "mob-justice",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.mob-justice",
    },
    {
      id: "no-quarter-given",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.no-quarter-given",
    },
    {
      id: "possessed",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.possessed",
    },
    {
      id: "scarce-provisions",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.scarce-provisions",
    },
    {
      id: "shattered-dreams",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.shattered-dreams",
    },
    {
      id: "strong-bonds",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.strong-bonds",
    },
    {
      id: "the-duke-s-betrayal",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.the-duke-s-betrayal",
    },
    {
      id: "the-earl-of-blackriver",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.the-earl-of-blackriver",
    },
    {
      id: "triumphant",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.triumphant",
    },
    {
      id: "truthful",
      effect:
        "Heroes hit with Weapon attack and succeed on Skill Challenges whenever they roll 1 on the d20. Each Hero that also has a Class Ability that turns their natural 1 rolls into Weapon attack hits also scores a Critical Hit on these attacks.",
      translationKey: "outcome.apocalypse.storyrecord.truthful",
    },
    {
      id: "umbralian-ally",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.umbralian-ally",
    },
    {
      id: "umbralian-enemy",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.umbralian-enemy",
    },
    {
      id: "unbroken",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.unbroken",
    },
    {
      id: "uncertain-journey",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.uncertain-journey",
    },
    {
      id: "wounded-eye",
      effect: "",
      translationKey: "outcome.apocalypse.storyrecord.wounded-eye",
    },
    {
      id: "wounded-paw",
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

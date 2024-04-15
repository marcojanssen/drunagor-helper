import type { Outcome } from "@/data/repository/campaign/Outcome";
import type { OutcomeRepository } from "@/data/repository/campaign/OutcomeRepository";
import * as _ from "lodash-es";

export class StoryRecordOutcomeRepository implements OutcomeRepository {
  private outcomes: Outcome[] = [
    {
      id: "a-good-deal",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.a-good-deal",
        effect: "",
      },
    },
    {
      id: "beautiful-lie",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.beautiful-lie",
        effect: "",
      },
    },
    {
      id: "broken",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.broken",
        effect: "",
      },
    },
    {
      id: "exquisite-friends",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.exquisite-friends",
        effect: "",
      },
    },
    {
      id: "friendly-advice",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.friendly-advice",
        effect: "",
      },
    },
    {
      id: "gal-s-fate",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.gal-s-fate",
        effect: "",
      },
    },
    {
      id: "hellscarian-ally",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.hellscarian-ally",
        effect: "",
      },
    },
    {
      id: "hellscarian-enemy",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.hellscarian-enemy",
        effect: "",
      },
    },
    {
      id: "hero-s-journey",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.hero-s-journey",
        effect: "",
      },
    },
    {
      id: "humbled",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.humbled",
        effect: "",
      },
    },
    {
      id: "impostor",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.impostor",
        effect: "",
      },
    },
    {
      id: "insured-trip",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.insured-trip",
        effect: "",
      },
    },
    {
      id: "late-guests",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.late-guests",
        effect: "",
      },
    },
    {
      id: "long-live",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.long-live",
        effect: "",
      },
    },
    {
      id: "luccanor-s-redemption",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.luccanor-s-redemption",
        effect: "",
      },
    },
    {
      id: "misery-ended",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.misery-ended",
        effect: "",
      },
    },
    {
      id: "mob-justice",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.mob-justice",
        effect: "",
      },
    },
    {
      id: "no-quarter-given",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.no-quarter-given",
        effect: "",
      },
    },
    {
      id: "possessed",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.possessed",
        effect: "",
      },
    },
    {
      id: "scarce-provisions",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.scarce-provisions",
        effect: "",
      },
    },
    {
      id: "shattered-dreams",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.shattered-dreams",
        effect: "",
      },
    },
    {
      id: "strong-bonds",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.strong-bonds",
        effect: "",
      },
    },
    {
      id: "the-duke-s-betrayal",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.the-duke-s-betrayal",
        effect: "",
      },
    },
    {
      id: "the-earl-of-blackriver",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.the-earl-of-blackriver",
        effect: "",
      },
    },
    {
      id: "triumphant",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.triumphant",
        effect: "",
      },
    },
    {
      id: "truthful",
      effect:
        "Heroes hit with Weapon attack and succeed on Skill Challenges whenever they roll 1 on the d20. Each Hero that also has a Class Ability that turns their natural 1 rolls into Weapon attack hits also scores a Critical Hit on these attacks.",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.truthful",
        effect: "outcome.apocalypse.storyrecord.truthful-effect",
      },
    },
    {
      id: "umbralian-ally",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.umbralian-ally",
        effect: "",
      },
    },
    {
      id: "umbralian-enemy",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.umbralian-enemy",
        effect: "",
      },
    },
    {
      id: "unbroken",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.unbroken",
        effect: "",
      },
    },
    {
      id: "uncertain-journey",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.uncertain-journey",
        effect: "",
      },
    },
    {
      id: "wounded-eye",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.wounded-eye",
        effect: "",
      },
    },
    {
      id: "wounded-paw",
      effect: "",
      translationKeys: {
        name: "outcome.apocalypse.storyrecord.wounded-paw",
        effect: "",
      },
    },
  ];

  public find(outcomeId: string): Outcome | undefined {
    return _.find(this.outcomes, { id: outcomeId });
  }

  public findAll(): Outcome[] {
    return this.outcomes;
  }
}

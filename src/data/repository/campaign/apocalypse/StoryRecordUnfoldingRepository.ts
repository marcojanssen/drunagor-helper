import * as _ from "lodash-es";
import type { Unfolding } from "./Unfolding";

export class StoryRecordUnfoldingRepository {
  private followers: Unfolding[] = [
    {
      id: "a-broken-man",
      name: "A Broken Man",
      act: 2,
    },
    {
      id: "a-crown-with-no-jewels",
      name: "A Crown with no Jewels",
      act: 2,
    },
    {
      id: "a-hero-restored",
      name: "A Hero Restored",
      act: 2,
    },
    {
      id: "carmillas-goodbye",
      name: "Carmilla's Goodbye",
      act: 1,
    },
    {
      id: "compromising",
      name: "Comprimising",
      act: 4,
    },
    {
      id: "connecting-dots",
      name: "Connecting Dots",
      act: 3,
    },
    {
      id: "crossroads",
      name: "Crossroads",
      act: 3,
    },
    {
      id: "gil-garoth-reborn",
      name: "Gil Garoth Reborn",
      act: 2,
    },
    {
      id: "heroic-folks",
      name: "Heroic Folks",
      act: 1,
    },
    {
      id: "luccanors-redemption",
      name: "Luccanor's Redemption",
      act: 1,
    },
    {
      id: "luccanors-regret",
      name: "Luccanor's Regret",
      act: 1,
    },
    {
      id: "no-ones-land",
      name: "No One's Land",
      act: 2,
    },
    {
      id: "survivors-survived",
      name: "Survivors Survived",
      act: 3,
    },
    {
      id: "the-bargain",
      name: "The Bargain",
      act: 3,
    },
    {
      id: "the-bonds-uniting-us",
      name: "The Bonds Uniting Us",
      act: 3,
    },
    {
      id: "the-desert-flower",
      name: "The Desert Flower",
      act: 2,
    },
    {
      id: "the-earl-of-nothing",
      name: "The Earl of Nothing",
      act: 3,
    },
    {
      id: "the-fallout",
      name: "The Fallout",
      act: 4,
    },
    {
      id: "the-good-duke",
      name: "The Good Duke",
      act: 1,
    },
    {
      id: "the-last-dance",
      name: "The Last Dance",
      act: 2,
    },
    {
      id: "the-safeguard-corporation",
      name: "The Safeguard Corporation",
      act: 3,
    },
    {
      id: "to-be-or-not-to-be",
      name: "To Be Or Not To Be?",
      act: 1,
    },
    {
      id: "tragic-fate",
      name: "Tragic Fate",
      act: 3,
    },
    {
      id: "truth-untold",
      name: "Truth Untold",
      act: 1,
    },
    {
      id: "what-goes-around-comes-around",
      name: "What Goes Around, Comes Around",
      act: 3,
    },
  ];

  public find(outcomeId: string): Unfolding | undefined {
    return _.find(this.followers, { id: outcomeId });
  }

  public findAll(): Unfolding[] {
    return this.followers;
  }
}

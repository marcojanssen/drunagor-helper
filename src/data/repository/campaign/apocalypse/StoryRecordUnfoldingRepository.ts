import * as _ from "lodash-es";
import type { Unfolding } from "./Unfolding";

export class StoryRecordUnfoldingRepository {
  private followers: Unfolding[] = [
    {
      id: "",
      name: "To Be Or Not To Be?",
      act: 1,
    },
    {
      id: "",
      name: "Carmilla's Goodbye",
      act: 1,
    },
    {
      id: "",
      name: "Heroic Folks",
      act: 1,
    },
    {
      id: "",
      name: "The Good Duke",
      act: 1,
    },
    {
      id: "",
      name: "Truth Untold",
      act: 1,
    },
    {
      id: "",
      name: "Luccanor's Regret",
      act: 1,
    },
    {
      id: "",
      name: "Luccanor's Redemption",
      act: 1,
    },
    {
      id: "",
      name: "No One's Land",
      act: 2,
    },
    {
      id: "",
      name: "Gil Garoth Reborn",
      act: 2,
    },
    {
      id: "",
      name: "The Last Dance",
      act: 2,
    },
    {
      id: "",
      name: "A Crown with no Jewels",
      act: 2,
    },
    {
      id: "",
      name: "The Desert Flower",
      act: 2,
    },
    {
      id: "",
      name: "A Broken Man",
      act: 2,
    },
    {
      id: "",
      name: "A Hero Restored",
      act: 2,
    },
    {
      id: "",
      name: "What Goes Around, Comes Around",
      act: 3,
    },
    {
      id: "",
      name: "The Bargain",
      act: 3,
    },
    {
      id: "",
      name: "The Earl of Nothing",
      act: 3,
    },
    {
      id: "",
      name: "Connecting Dots",
      act: 3,
    },
    {
      id: "",
      name: "The Bonds Uniting Us",
      act: 3,
    },
    {
      id: "",
      name: "The Safeguard Corporation",
      act: 3,
    },
    {
      id: "",
      name: "Crossroads",
      act: 3,
    },
    {
      id: "",
      name: "Tragic Fate",
      act: 3,
    },
    {
      id: "",
      name: "Survivors Survived",
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

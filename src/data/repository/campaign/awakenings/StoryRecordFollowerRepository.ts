import type { Follower } from "@/data/repository/campaign/Follower";
import type { FollowerRepository } from "@/data/repository/campaign/FollowerRepository";
import * as _ from "lodash-es";

export class StoryRecordFollowerRepository implements FollowerRepository {
  private followers: Follower[] = [
    {
      id: "elros",
      name: "Elros, the Assassin",
    },
    {
      id: "lorelai",
      name: "Lorelai, the Mage",
    },
    {
      id: "maya",
      name: "Maya, the Ranger",
    },
    {
      id: "minerva",
      name: "Minerva",
    },
    {
      id: "vorn",
      name: "Vorn, the Warrior",
    },
  ];

  public find(outcomeId: string): Follower | undefined {
    return _.find(this.followers, { id: outcomeId });
  }

  public findAll(): Follower[] {
    return this.followers;
  }
}

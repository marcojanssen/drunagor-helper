import type { Follower } from "@/data/repository/campaign/Follower";
import type { FollowerRepository } from "@/data/repository/campaign/FollowerRepository";
import * as _ from "lodash-es";

export class StoryRecordFollowerRepository implements FollowerRepository {
  private followers: Follower[] = [
    {
      id: "amster-dehanse",
      name: "Amsterd deHanse",
    },
    {
      id: "carmilla-reinard",
      name: "Carmilla Reinard",
    },
    {
      id: "condottieri-daviggo",
      name: "Condottieri DaViggo",
    },
    {
      id: "dunedancer-khadija",
      name: "Dunedancer Khadija",
    },
    {
      id: "robin-rising",
      name: "Robin Rising",
    },
  ];

  public find(outcomeId: string): Follower | undefined {
    return _.find(this.followers, { id: outcomeId });
  }

  public findAll(): Follower[] {
    return this.followers;
  }
}

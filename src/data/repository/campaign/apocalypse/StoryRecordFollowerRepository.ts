import type { FollowerData } from "@/data/repository/campaign/FollowerData";
import type { FollowerRepository } from "@/data/repository/campaign/FollowerRepository";
import * as _ from "lodash-es";

export class StoryRecordFollowerRepository implements FollowerRepository {
  private followers: FollowerData[] = [
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

  public find(outcomeId: string): FollowerData | undefined {
    return _.find(this.followers, { id: outcomeId });
  }

  public findAll(): FollowerData[] {
    return this.followers;
  }
}

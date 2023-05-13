import type { Follower } from "@/data/repository/campaign/Follower";

export interface FollowerRepository {
  find(id: string): Follower | undefined;
  findAll(): Follower[];
}

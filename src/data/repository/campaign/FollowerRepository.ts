import type { FollowerData } from "@/data/repository/campaign/FollowerData";

export interface FollowerRepository {
  find(id: string): FollowerData | undefined;
  findAll(): FollowerData[];
}

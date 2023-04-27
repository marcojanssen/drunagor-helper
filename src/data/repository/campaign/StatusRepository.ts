import type { StatusData } from "@/data/repository/campaign/StatusData";

export interface StatusRepository {
  find(id: string): StatusData | undefined;
  findAll(): StatusData[];
}

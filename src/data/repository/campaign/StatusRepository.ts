import type { Status } from "@/data/repository/campaign/Status";

export interface StatusRepository {
  find(id: string): Status | undefined;
  findAll(): Status[];
  load(lang: string): void;
}

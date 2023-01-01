import type { KeywordData } from "@/data/repository/KeywordData";
import * as _ from "lodash-es";
import type { DataRepository } from "./DataRepository";

export class KeywordDataRepository implements DataRepository {
  private keywords: KeywordData[] = [
    {
      id: "poison",
      keyword: "poison",
      description: "nasty stuff",
    },
    {
      id: "regeneration",
      keyword: "regeneration",
      description: "nasty stuff",
    },
    {
      id: "strike",
      keyword: "strike",
      description: "nasty stuff",
    },
    {
      id: "stun",
      keyword: "stun",
      description: "nasty stuff",
    },
  ];

  public find(keyword: string): KeywordData | undefined {
    return _.find(this.keywords, { keyword: keyword });
  }

  public findAll(): KeywordData[] {
    return this.keywords;
  }
}

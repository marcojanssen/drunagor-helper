import type { KeywordData } from "@/data/repository/KeywordData";
import * as _ from "lodash-es";
import type { DataRepository } from "@/data/repository/DataRepository";
import { useI18n } from "vue-i18n";

export class KeywordDataRepository implements DataRepository {
  public find(id: string): KeywordData | undefined {
    return _.find(this.keywords, { id: id });
  }

  public findAll(): KeywordData[] {
    return this.keywords;
  }

  public load(locale: string) {
    const i18n = useI18n();

    let keywords = i18n.messages.value[locale].keyword as KeywordData[];
    if (keywords.length < 1) {
      keywords = i18n.messages.value[i18n.fallbackLocale.value as string].keyword as KeywordData[];
    }
    this.keywords = keywords;
    this.keywords = _.sortBy(this.keywords, ["keyword"]);
  }

  private keywords: KeywordData[] = [];
}

import * as _ from "lodash-es";
import { defineStore } from "pinia";
import { English } from "@/entity/Language/English";
import { German } from "@/entity/Language/German";
import type { Language } from "@/entity/Language/Language";
import { French } from "@/entity/Language/French";
import { Italian } from "@/entity/Language/Italian";
import { Spanish } from "@/entity/Language/Spanish";
import { Portuguese } from "@/entity/Language/Portuguese";
import { Polish } from "@/entity/Language/Polish";

export const LanguageStore = defineStore("language", () => {
  const languages = [
    new English(),
    new German(),
    new French(),
    new Italian(),
    new Spanish(),
    new Portuguese(),
    new Polish(),
  ] as Language[];

  function getAll(): Language[] {
    return languages;
  }

  function find(locale: string): Language {
    const language = _.find(languages, { locale: locale });
    if (language === undefined) {
      throw new Error("Language with locale:" + locale + " can not be found");
    }
    return language;
  }

  return {
    languages,
    getAll,
    find,
  };
});

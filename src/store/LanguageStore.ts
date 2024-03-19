import * as _ from "lodash-es";
import { defineStore } from "pinia";
import { English } from "@/entity/Language/English";
import { German } from "@/entity/Language/German";
import type { Language } from "@/entity/Language/Language";

export const LanguageStore = defineStore("language", () => {
  const languages = [new English(), new German()] as Language[];

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

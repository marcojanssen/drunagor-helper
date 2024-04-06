import type { Language } from "@/entity/Language/Language";

export class Spanish implements Language {
  public readonly locale: string = "es_ES";
  public readonly title: string = "Spanish";
  public readonly translation_key: string = "language.spanish";
}

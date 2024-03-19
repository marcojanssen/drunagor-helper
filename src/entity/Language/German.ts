import type { Language } from "@/entity/Language/Language";

export class German implements Language {
  public readonly locale: string = "de_DE";
  public readonly title: string = "German";
  public readonly translation_key: string = "language.german";
}

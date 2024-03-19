import type { Language } from "@/entity/Language/Language";

export class English implements Language {
  public readonly locale: string = "en_US";
  public readonly title: string = "English";
  public readonly translation_key: string = "language.english";
}

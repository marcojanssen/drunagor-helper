import type { Language } from "@/entity/Language/Language";

export class Italian implements Language {
  public readonly locale: string = "it_IT";
  public readonly title: string = "Italian";
  public readonly translation_key: string = "language.italian";
}

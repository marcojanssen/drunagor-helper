import type { Language } from "@/entity/Language/Language";

export class French implements Language {
  public readonly locale: string = "fr_FR";
  public readonly title: string = "French";
  public readonly translation_key: string = "language.french";
}

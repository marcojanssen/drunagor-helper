import type { Language } from "@/entity/Language/Language";

export class Portuguese implements Language {
  public readonly locale: string = "pt_BR";
  public readonly title: string = "Portuguese";
  public readonly translation_key: string = "language.portuguese";
}

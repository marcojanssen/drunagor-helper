import type { Language } from "@/entity/Language/Language";

export class Polish implements Language {
  public readonly locale: string = "pl_PL";
  public readonly title: string = "Polish";
  public readonly translation_key: string = "language.polish";
}

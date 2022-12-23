export class Member {
  public heroId: string;
  public auraId: string | null = null;
  public outcomeIds: Array<string> = [];
  public statusIds: Array<string> = [];

  constructor(heroId: string) {
    this.heroId = heroId;
  }
}

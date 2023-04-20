export class Hero {
  public heroId: string;
  public campaignId: string;
  public auraId: string | null = null;
  public outcomeIds: Array<string> = [];
  public statusIds: Array<string> = [];

  constructor(heroId: string, campaignId: string) {
    this.heroId = heroId;
    this.campaignId = campaignId;
  }
}

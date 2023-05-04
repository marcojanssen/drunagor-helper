export class HeroEquipment {
  public weaponId: string = "";
  public offHandId: string = "";
  public armorId: string = "";
  public trinketId: string = "";
  public bagOneId: string = "";
  public bagTwoId: string = "";
}

export class Hero {
  public heroId: string;
  public campaignId: string;
  public equipment: HeroEquipment = new HeroEquipment();
  public stashedCardIds: Array<string> = [];
  public skillIds: Array<string> = [];
  public auraId: string | null = null;
  public outcomeIds: Array<string> = [];
  public statusIds: Array<string> = [];

  constructor(heroId: string, campaignId: string) {
    this.heroId = heroId;
    this.campaignId = campaignId;
  }
}

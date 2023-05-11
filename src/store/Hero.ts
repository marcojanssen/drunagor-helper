const resourceDefinitions = [
  { id: "focus", name: "Focus" },
  { id: "fruit-of-life", name: "Fruit of Life" },
  { id: "ki", name: "KI" },
  { id: "shield", name: "Shield" },
];

export class HeroEquipment {
  public weaponId: string = "";
  public offHandId: string = "";
  public armorId: string = "";
  public trinketId: string = "";
  public bagOneId: string = "";
  public bagTwoId: string = "";
}

export class SequentialAdventureState {
  public curseCubes: number = 0;
  public traumaCubes: number = 0;
  public resources: any = {};

  constructor() {
    resourceDefinitions.forEach((resource) => {
      if (!(resource.name in this.resources)) {
        this.resources[resource.name] = 0;
      }
    });
  }
}

export class Hero {
  public heroId: string;
  public campaignId: string;
  public equipment: HeroEquipment = new HeroEquipment();
  public stashedCardIds: Array<string> = [];
  public skillIds: Array<string> = [];
  public sequentialAdventureState: SequentialAdventureState | null = null;
  public auraId: string | null = null;
  public outcomeIds: Array<string> = [];
  public statusIds: Array<string> = [];

  constructor(heroId: string, campaignId: string) {
    this.heroId = heroId;
    this.campaignId = campaignId;
  }
}

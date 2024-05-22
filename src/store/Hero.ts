const resourceDefinitions = [
  { id: "focus", translation_key: "label.focus" },
  { id: "fruit-of-life", translation_key: "label.fruit-of-life" },
  { id: "ki", translation_key: "label.ki", name: "KI" },
  { id: "shield", translation_key: "label.shield" },
  { id: "fury", translation_key: "label.fury" },
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
      if (!(resource.translation_key in this.resources)) {
        this.resources[resource.translation_key] = 0;
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
  public dungeonRoleSkillCubeColors: {
    rankOne: string | null;
    rankTwo: string | null;
  } = {
    rankOne: null,
    rankTwo: null,
  };
  public sequentialAdventureState: SequentialAdventureState | null = null;
  public auraId: string | null = null;
  public outcomeIds: Array<string> = [];
  public statusIds: Array<string> = [];

  constructor(heroId: string, campaignId: string) {
    this.heroId = heroId;
    this.campaignId = campaignId;
  }
}

import { Andreas } from "@/data/content/awakenings/hero/Andreas";
import { Catharina } from "@/data/content/awakenings/hero/Catharina";
import { Nyx } from "@/data/content/awakenings/hero/Nyx";
import { Vacren } from "@/data/content/awakenings/hero/Vacren";
import { Elros } from "@/data/content/core/hero/Elros";
import { Jaheen } from "@/data/content/core/hero/Jaheen";
import { Lorelai } from "@/data/content/core/hero/Lorelai";
import { Maya } from "@/data/content/core/hero/Maya";
import { Vorn } from "@/data/content/core/hero/Vorn";
import { Katarina } from "@/data/content/desertofhellscar/hero/Katarina";
import { Tork } from "@/data/content/desertofhellscar/hero/Tork";
import { Handuriel } from "@/data/content/handuriel/hero/Handuriel";
import { Diana } from "@/data/content/heropack1/hero/Diana";
import { Drixx } from "@/data/content/heropack1/hero/Drixx";
import { Sahara } from "@/data/content/heropack1/hero/Sahara";
import { Siff } from "@/data/content/heropack1/hero/Siff";
import { Lordwrath } from "@/data/content/lordwrath/hero/Lordwrath";
import { Drasek } from "@/data/content/riseoftheundeaddragon/hero/Drasek";
import { Jade } from "@/data/content/riseoftheundeaddragon/hero/Jade";
import { Arkhanos } from "@/data/content/spoilsofwar/hero/Arkhanos";
import { Barak } from "@/data/content/spoilsofwar/hero/Barak";
import { Devron } from "@/data/content/spoilsofwar/hero/Devron";
import { Duncan } from "@/data/content/spoilsofwar/hero/Duncan";
import { Flavian } from "@/data/content/spoilsofwar/hero/Flavian";
import { Kellam } from "@/data/content/spoilsofwar/hero/Kellam";
import { Pietro } from "@/data/content/spoilsofwar/hero/Pietro";
import { Savran } from "@/data/content/spoilsofwar/hero/Savran";
import { Shadow } from "@/data/content/spoilsofwar/hero/Shadow";
import { Sskar } from "@/data/content/spoilsofwar/hero/Sskar";
import { Sun } from "@/data/content/spoilsofwar/hero/Sun";
import { Willow } from "@/data/content/spoilsofwar/hero/Willow";
import type { HeroData } from "@/data/repository/HeroData";
import * as _ from "lodash-es";
import type { DataRepository } from "./DataRepository";

export class HeroDataRepository implements DataRepository {
  private heroes = [
    new Andreas(),
    new Arkhanos(),
    new Barak(),
    new Catharina(),
    new Devron(),
    new Diana(),
    new Drasek(),
    new Drixx(),
    new Duncan(),
    new Elros(),
    new Flavian(),
    new Handuriel(),
    new Jade(),
    new Jaheen(),
    new Katarina(),
    new Kellam(),
    new Lordwrath(),
    new Lorelai(),
    new Maya(),
    new Nyx(),
    new Pietro(),
    new Sahara(),
    new Savran(),
    new Shadow(),
    new Siff(),
    new Sskar(),
    new Sun(),
    new Tork(),
    new Vacren(),
    new Vorn(),
    new Willow(),
  ];

  public find(heroId: string): HeroData | undefined {
    return _.find(this.heroes, { id: heroId });
  }

  public findAll(): HeroData[] {
    return this.heroes;
  }
}

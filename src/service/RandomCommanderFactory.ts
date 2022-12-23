import type { CommanderData } from "@/data/store/CommanderData";
import { RandomCommander } from "@/entity/RandomCommander";
import { RandomImage } from "@/entity/RandomImage";

export class RandomCommanderFactory {
  static fromCommanderData(commander: CommanderData): RandomCommander {
    return new RandomCommander(
      commander.id,
      commander.name,
      new RandomImage(commander.images.big, commander.images.miniature)
    );
  }
}

import ImageUrl from "@/assets/monster/big/GrimDoctorBig.webp";
import type { CommanderData } from "@/data/store/CommanderData";
import type { ContentId } from "@/data/type/ContentId";

export class Doctor implements CommanderData {
  id = "commander-doctor";
  name = "Doctor";
  content: ContentId = "awakenings";
  images = {
    big: ImageUrl,
    miniature: "",
  };
  translation_key = "monster.commander-doctor";
}

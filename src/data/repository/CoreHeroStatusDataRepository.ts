import { ACooperativeApproach } from "@/data/content/core/status/ACooperativeApproach";
import { AFriendlyApproach } from "@/data/content/core/status/AFriendlyApproach";
import { AMansBestFriend } from "@/data/content/core/status/AMansBestFriend";
import { AMysteriousClick } from "@/data/content/core/status/AMysteriousClick";
import { ASuspiciousApproach } from "@/data/content/core/status/ASuspiciousApproach";
import { AggressiveApproach } from "@/data/content/core/status/AggressiveApproach";
import { Apathetic } from "@/data/content/core/status/Apathetic";
import { BattlefieldMedic } from "@/data/content/core/status/BattlefieldMedic";
import { Beheaded } from "@/data/content/core/status/Beheaded";
import { BlessedSource } from "@/data/content/core/status/BlessedSource";
import { Bloodlust } from "@/data/content/core/status/Bloodlust";
import { BlueFlame } from "@/data/content/core/status/BlueFlame";
import { Bookworm } from "@/data/content/core/status/Bookworm";
import { Bullied } from "@/data/content/core/status/Bullied";
import { Cautious } from "@/data/content/core/status/Cautious";
import { Certainty1 } from "@/data/content/core/status/Certainty1";
import { Certainty2 } from "@/data/content/core/status/Certainty2";
import { Certainty3 } from "@/data/content/core/status/Certainty3";
import { Challenger } from "@/data/content/core/status/Challenger";
import { CicadasChant } from "@/data/content/core/status/CicadasChant";
import { Curiosity1 } from "@/data/content/core/status/Curiosity1";
import { Curiosity2 } from "@/data/content/core/status/Curiosity2";
import { Curiosity3 } from "@/data/content/core/status/Curiosity3";
import { Cursebreaker } from "@/data/content/core/status/Cursebreaker";
import { DeepUnderstanding } from "@/data/content/core/status/DeepUnderstanding";
import { DoubleCheck } from "@/data/content/core/status/DoubleCheck";
import { Embarrassed } from "@/data/content/core/status/Embarrassed";
import { EmeraldBlessing } from "@/data/content/core/status/EmeraldBlessing";
import { FairAndSquare } from "@/data/content/core/status/FairAndSquare";
import { FireRuby } from "@/data/content/core/status/FireRuby";
import { Focused } from "@/data/content/core/status/Focused";
import { FolkHero } from "@/data/content/core/status/FolkHero";
import { ForTheFirstTime } from "@/data/content/core/status/ForTheFirstTime";
import { FoulPlay } from "@/data/content/core/status/FoulPlay";
import { Greetings } from "@/data/content/core/status/Greetings";
import { Harmless } from "@/data/content/core/status/Harmless";
import { HelpYourself } from "@/data/content/core/status/HelpYourself";
import { Horseblood } from "@/data/content/core/status/Horseblood";
import { Inspired } from "@/data/content/core/status/Inspired";
import { Invincible } from "@/data/content/core/status/Invincible";
import { KeyShard } from "@/data/content/core/status/KeyShard";
import { MasterOfUndeath } from "@/data/content/core/status/MasterOfUndeath";
import { Meek } from "@/data/content/core/status/Meek";
import { Merciful } from "@/data/content/core/status/Merciful";
import { Mistwalker } from "@/data/content/core/status/Mistwalker";
import { Noise } from "@/data/content/core/status/Noise";
import { PlayDumb } from "@/data/content/core/status/PlayDumb";
import { Practical } from "@/data/content/core/status/Practical";
import { Proud } from "@/data/content/core/status/Proud";
import { ReapingAHurricane } from "@/data/content/core/status/ReapingAHurricane";
import { RestInPeace } from "@/data/content/core/status/RestInPeace";
import { Restrained } from "@/data/content/core/status/Restrained";
import { Safeguard } from "@/data/content/core/status/Safeguard";
import { SecretPassage } from "@/data/content/core/status/SecretPassage";
import { ShatteredBarrierInferno } from "@/data/content/core/status/ShatteredBarrierInferno";
import { ShatteredBarrierThunder } from "@/data/content/core/status/ShatteredBarrierThunder";
import { Steadfast } from "@/data/content/core/status/Steadfast";
import { TellMyFingertips } from "@/data/content/core/status/TellMyFingertips";
import { TheHonorableGesture } from "@/data/content/core/status/TheHonorableGesture";
import { TrickOrTreat } from "@/data/content/core/status/TrickOrTreat";
import { TruthSeeker } from "@/data/content/core/status/TruthSeeker";
import { Truthful } from "@/data/content/core/status/Truthful";
import { UnravelingTheMystery } from "@/data/content/core/status/UnravelingTheMystery";
import { Warned } from "@/data/content/core/status/Warned";
import { WatchYourStep } from "@/data/content/core/status/WatchYourStep";
import { Waxed } from "@/data/content/core/status/Waxed";
import type { DataRepository } from "@/data/repository/DataRepository";
import type { StatusData } from "@/data/repository/StatusData";
import * as _ from "lodash-es";

export class CoreHeroStatusDataRepository implements DataRepository {
  statuses = [
    new ACooperativeApproach(),
    new AFriendlyApproach(),
    new AggressiveApproach(),
    new AMansBestFriend(),
    new AMysteriousClick(),
    new Apathetic(),
    new ASuspiciousApproach(),
    new BattlefieldMedic(),
    new Beheaded(),
    new BlessedSource(),
    new Bloodlust(),
    new BlueFlame(),
    new Bookworm(),
    new Bullied(),
    new Cautious(),
    new Certainty1(),
    new Certainty2(),
    new Certainty3(),
    new Challenger(),
    new CicadasChant(),
    new Curiosity1(),
    new Curiosity2(),
    new Curiosity3(),
    new Cursebreaker(),
    new DeepUnderstanding(),
    new DoubleCheck(),
    new Embarrassed(),
    new EmeraldBlessing(),
    new FairAndSquare(),
    new FireRuby(),
    new Focused(),
    new FolkHero(),
    new ForTheFirstTime(),
    new FoulPlay(),
    new Greetings(),
    new Harmless(),
    new HelpYourself(),
    new Horseblood(),
    new Inspired(),
    new Invincible(),
    new KeyShard(),
    new MasterOfUndeath(),
    new Meek(),
    new Merciful(),
    new Mistwalker(),
    new Noise(),
    new PlayDumb(),
    new Practical(),
    new Proud(),
    new ReapingAHurricane(),
    new RestInPeace(),
    new Restrained(),
    new Safeguard(),
    new SecretPassage(),
    new ShatteredBarrierInferno(),
    new ShatteredBarrierThunder(),
    new Steadfast(),
    new TellMyFingertips(),
    new TheHonorableGesture(),
    new TrickOrTreat(),
    new Truthful(),
    new TruthSeeker(),
    new UnravelingTheMystery(),
    new Warned(),
    new WatchYourStep(),
    new Waxed(),
  ];

  public find(statusId: string): StatusData | undefined {
    return _.find(this.statuses, { id: statusId });
  }

  public findAll(): StatusData[] {
    return this.statuses;
  }
}

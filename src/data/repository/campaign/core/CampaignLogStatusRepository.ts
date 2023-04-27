import type { StatusData } from "@/data/repository/campaign/StatusData";
import type { StatusRepository } from "@/data/repository/campaign/StatusRepository";
import * as _ from "lodash-es";

export class CampaignLogStatusRepository implements StatusRepository {
  statuses: StatusData[] = [
    {
      id: "a-cooperative-approach",
      name: "A cooperative approach",
      effect:
        "Whenever a Hero searches a Chest, they may draw one additional card and choose one of the two they draw to keep. They must shuffle the other card back into the deck.",
    },
    {
      id: "a-friendly-approach",
      name: "A friendly approach",
      effect:
        "Whenever any Hero resolves an effect with the keyword 'SELF' on it, they may choose another character who is adjacent to them as its target instead of themselves.",
    },
    {
      id: "aggressive-approach",
      name: "Aggressive approach",
      effect: "As a Minor Action, you may: SELF, CURSE 1 to unsummon an Undead King Haunting.",
    },
    {
      id: "a-man-s-best-friend",
      name: "A man's best friend",
      effect: "",
    },
    {
      id: "a-mysterious-click",
      name: "A mysterious click",
      effect: "",
    },
    {
      id: "apathetic",
      name: "Apathetic",
      effect: "",
    },
    {
      id: "a-suspicious-approach",
      name: "A suspicious approach",
      effect: "All Chests are considered safe and the Heroes do not need to roll the Trap die when searching them.",
    },
    {
      id: "battlefield-medic",
      name: "Battlefield medic",
      effect:
        "As a Cube Action, you may: Expend 1 AC while adjacent to a Knocked Out Hero to remove the Trauma Cube they just received from their board (this action can't remove a Trauma Cube from a Hero after they have regained their breath).",
    },
    {
      id: "beheaded",
      name: "Beheaded",
      effect: "",
    },
    {
      id: "blessed-source",
      name: "Blessed source",
      effect: "You do not receive any Curse Cubes when you take a Recall Action.",
    },
    {
      id: "bloodlust",
      name: "Bloodlust",
      effect:
        "Whenever you kill a Monster during your turn, after you resolve the current Action, you may take an additional Cube Action. This effect can trigger only once per turn. Otherwise, if no Hero has it, you gain FOCUS 2.",
    },
    {
      id: "blue-flame",
      name: "Blue flame",
      effect: "You suffer no damage from Darkness.",
    },
    {
      id: "bookworm",
      name: "Bookworm",
      effect:
        "Whenever you take a Recall Action during your turn, you may retrieve a Scroll card from the Chest deck discard pile and use it immediately. This does not count as a “Use Consumable Item” Minor Action. If you do, after resolving that card, shuffle it back in the Chest deck instead of putting it again in the discard pile.",
    },
    {
      id: "bullied",
      name: "Bullied",
      effect: "Whenever you roll 5 or less on the d20, you score a critical failure.",
    },
    {
      id: "cautious",
      name: "Cautious",
      effect:
        "Whenever a Hero without the 'Warned' Status would be knocked out, that Hero may: SELF, CURSE 1. If they do, they must write down the 'Warned' Status on their Campaign Log and drop to 1 Health instead.",
    },
    {
      id: "certainty-1",
      name: "Certainty",
      effect: "",
    },
    {
      id: "certainty-2",
      name: "Certainty",
      effect: "",
    },
    {
      id: "certainty-3",
      name: "Certainty",
      effect: "",
    },
    {
      id: "challenger",
      name: "Challenger",
      effect:
        "Whenever you suffer 4 or more damage from an attack (damage suffered is calculated after PREVENTs): RETALIATE 2.",
    },
    {
      id: "cicadas-chant",
      name: "Cicada's chant",
      effect: "",
    },
    {
      id: "curiosity-1",
      name: "Curiosity",
      effect: "",
    },
    {
      id: "curiosity-2",
      name: "Curiosity",
      effect: "",
    },
    {
      id: "curiosity-3",
      name: "Curiosity",
      effect: "",
    },
    {
      id: "cursebreaker",
      name: "Curse breaker",
      effect: "",
    },
    {
      id: "deep-understanding",
      name: "Deep understanding",
      effect:
        "Whenever any Hero chooses an Interaction, they may: SELF, CURSE 1. If they do, they may undo the Interaction they just read and choose another Interaction from that same scene again. They may use this ability only once per Interaction, and the Interaction that is backtracked in this way becomes available again.",
    },
    {
      id: "double-check",
      name: "Double check",
      effect:
        "As a Minor Action, you may: SELF, CURSE 1 to remove one Darkness tile you are on top of and gain FOCUS 1.",
    },
    {
      id: "embarrassed",
      name: "Embarrassed",
      effect: "You can use only Green and Blue cubes to Activate your Skills that have a four-colored AC Slot.",
    },
    {
      id: "emeraldblessing",
      name: "Emerald blessing",
      effect:
        "Your Spell Attacks gain POISON 2 and your Weapon Attacks gain 'Whenever you Roll 16+: this attack gains POISON 2'",
    },
    {
      id: "fair-and-square",
      name: "Fair and square",
      effect: "You score a Critical Hit whenever you roll 4 or 16 on the d20.",
    },
    {
      id: "fire-ruby",
      name: "Fire ruby",
      effect:
        "Your Spell Attacks gain BURN 2 and your Weapon Attacks gain “Whenever you roll 16+: This attack gains BURN 2.”",
    },
    {
      id: "focused",
      name: "Focused",
      effect: "Whenever any Hero scores a Crit, that Hero gains FOCUS 1.",
    },
    {
      id: "folk-hero",
      name: "Folk hero",
      effect: "Whenever you remove a Curse Cube from your board you also: SELF, HEAL 2.",
    },
    {
      id: "for-the-first-time",
      name: "For the first time",
      effect:
        "After you have spent your first AC during your turn, you may choose to immediately recall it (it still counts as one of your Cube Actions). This effect takes place before you would take an Unwilling Recall Action.",
    },
    {
      id: "foul-play",
      name: "Foul play",
      effect: "Whenever you take a Recall Action, you suffer POISON 2.",
    },
    {
      id: "greetings",
      name: "Greetings",
      effect: "",
    },
    {
      id: "harmless",
      name: "Harmless",
      effect: "",
    },
    {
      id: "help-yourself",
      name: "Help yourself",
      effect:
        "As a Minor Action, you may: SELF, CURSE 1 to return an entire revealed Pile of Runes (that is on the board, not the Initiative Track) to the bag and gain FOCUS 1.",
    },
    {
      id: "horseblood",
      name: "Horseblood",
      effect: "All Heroes are immune to all Conditions imposed by enemies or harmful terrain.",
    },
    {
      id: "inspired",
      name: "Inspired",
      effect: "Once per turn, you may reroll a D20 when you miss.",
    },
    {
      id: "invincible",
      name: "Invincible",
      effect:
        "As a Minor Action, you may: SELF, Remove a Trauma Cube to either make the next Weapon Attack (a single attack, not the entire Cube Action) or Spell Attack they make that turn deal double damage.",
    },
    {
      id: "key-shard",
      name: "Keyshard",
      effect: "",
    },
    {
      id: "master-of-undeath",
      name: "Master of undeath",
      effect:
        "Whenever you take a Recall Action, after you resolve it, you may: SELF, CURSE 1. If you do, activate a small based Apparition of your choice. You control its turn during that activation (you may ignore its targeting priorities and force it to attack another Monster instead).",
    },
    {
      id: "meek",
      name: "Meek",
      effect:
        "Whenever any Hero would drop to 0 HP or less, up to one other Hero may make a Wisdom (blue) Skill Challenge of Difficulty 15. Each Wisdom cube they have gives them a +2 bonus to their roll. If they succeed, they redirect the damage that would knock out that Hero to themselves (this damage can't be prevented or reacted to).",
    },
    {
      id: "merciful",
      name: "Merciful",
      effect: "",
    },
    {
      id: "mistwalker",
      name: "Mistwalker",
      effect:
        "Whenever a Hero takes a Move Action, they may: SELF, CURSE 1. If they do, they remove their Hero from the board and place it on any revealed square of their choice instead of moving. This is considered “taking a Move Action” for purposes of triggering abilities.",
    },
    {
      id: "noise",
      name: "Noise",
      effect: "",
    },
    {
      id: "play-dumb",
      name: "Play dumb",
      effect: "You may choose not to gain any Curse Cubes when you take a Recall Action.",
    },
    {
      id: "practical",
      name: "Practical",
      effect:
        "Whenever any Hero would receive an Attack that would drop their HP to 0 or less, as a Reaction that Hero may make an Agility (green) Skill Challenge of Difficulty 15. Each Agility cube they have gives them a +2 bonus to their roll. If they succeed, they JUMP 2 and PREVENT ALL DMG they would take.",
    },
    {
      id: "proud",
      name: "Proud",
      effect:
        "Whenever any Hero drops to 0 HP or less, that Hero may make a Dexterity (red) Skill Challenge of Difficulty 15. Each Ranged cube they have gives them a +2 bonus to their roll. If they succeed, RETALIATE 10.",
    },
    {
      id: "reaping-a-hurricane",
      name: "Reaping a hurricane",
      effect:
        "At the beginning of their turn: SELF, CURSE 1. Instead of placing the CC they receive in a Skill Slot, they hold as if it were also an AC and it can be used that turn as a Wild Cube (it still counts toward the CC limit the Hero can hold).",
    },
    {
      id: "rest-in-peace",
      name: "Rest in peace",
      effect: "",
    },
    {
      id: "restrained",
      name: "Restrained",
      effect:
        "All Heroes can use their green cubes as if they were blue or yellow cubes. Whenever a Hero uses a green cube to activate a Melee Skill that is NOT a Weapon Attack in this way, that Skill gains unlimited Range.",
    },
    {
      id: "safeguard",
      name: "Safeguard",
      effect: "Your Spell Attacks gain ', SHIELD 2' and your Weapon Attacks gain 'Whenever you roll 16+: SHIELD 2.'",
    },
    {
      id: "secret-passage",
      name: "Secret passage",
      effect: "",
    },
    {
      id: "shattered-barrier-inferno",
      name: "Shattered barrier: Inferno",
      effect: "",
    },
    {
      id: "shattered-barrier-thunder",
      name: "Shattered barrier: Thunder",
      effect: "",
    },
    {
      id: "steadfast",
      name: "Steadfast",
      effect:
        "Whenever any Hero drops to 0 HP or less, that Hero may make a Strength (yellow) Skill Challenge of Difficulty 15. Each Melee cube they have gives them a +2 bonus to their roll. If they succeed, they drop to 1 HP instead.",
    },
    {
      id: "tell-my-fingertips",
      name: "Tell my fingertips",
      effect: "",
    },
    {
      id: "the-honorable-gesture",
      name: "The honorable gesture",
      effect: "Whenever you take a Recall Action, you also gain FOCUS 1.",
    },
    {
      id: "trick-or-treat",
      name: "Trick or treat",
      effect:
        "Whenever you take a Recall Action, choose one: inflict BURN 2 on a Target within Range 1, or, Target Hero within Range 1, HEAL 2.",
    },
    {
      id: "truthful",
      name: "Truthful",
      effect: "Each Hero can hold two additional Curse Cubes on their board.",
    },
    {
      id: "truth-seeker",
      name: "Truthseeker",
      effect: "Whenever you remove a Curse Cube from your board you also: SELF, SHIELD 2.",
    },
    {
      id: "unraveling-the-mystery",
      name: "Unraveling the mystery",
      effect:
        "Whenever an effect would summon a Minion (Minions are a specific type of Monster that are not White, Grey, or Black), you may Expend 2 AC to cancel the summoning effect. You cannot cancel Minions that are added by a Setup, but you can cancel those that are summoned through your enemies abilities.",
    },
    {
      id: "warned",
      name: "Warned",
      effect: "",
    },
    {
      id: "watch-your-step",
      name: "Watch your step",
      effect: "",
    },
    {
      id: "waxed",
      name: "Waxed",
      effect: "",
    },
  ];

  public find(statusId: string): StatusData | undefined {
    return _.find(this.statuses, { id: statusId });
  }

  public findAll(): StatusData[] {
    return this.statuses;
  }
}

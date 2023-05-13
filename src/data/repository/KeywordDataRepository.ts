import type { KeywordData } from "@/data/repository/KeywordData";
import * as _ from "lodash-es";
import type { DataRepository } from "./DataRepository";

export class KeywordDataRepository implements DataRepository {
  public find(id: string): KeywordData | undefined {
    return _.find(this.keywords, { id: id });
  }

  public findAll(): KeywordData[] {
    return this.keywords;
  }

  private keywords: KeywordData[] = [
    {
      id: "x-dmg",
      keyword: "+X or -X DMG",
      description:
        "X value is added to or subtracted from the Damage your Attack inflicts. Critical Hits and x2 DMG also double this.",
    },
    {
      id: "x-hit",
      keyword: "+X or -X HIT",
      description:
        "Make a Weapon Attack adding (or subtracting) the X value to your die roll. Only affects Accuracy, not getting a Critical Hit.",
    },
    {
      id: "x-movement",
      keyword: "+X MOVEMENT",
      description: "You received X additional movement points for every Move effect gained.",
    },
    {
      id: "action-cube",
      keyword: "ACTION CUBES (AC)",
      description: "Colored cubes spend by Heroes to use their skills.",
    },
    {
      id: "adjacent",
      keyword: "ADJ OR ADJACENT",
      description:
        "This effect can only affect a Target in an adjacent square to the casting Character, regardless of the Skill's Range.",
    },
    {
      id: "area",
      keyword: "AREA",
      description: "Refers to a blue square on a map tile.",
    },
    {
      id: "all",
      keyword: "ALL",
      description:
        "An effect with this term means equivalent to the damage the Target is receiving. The effect still only applies to one Target of an attack, not both or more, during MULTISHOT, CLEAVE or STRIKE.",
    },
    {
      id: "ambush",
      keyword: "AMBUSH",
      description:
        "Monster teleports to any unoccupied space adjacent to its target of that target's choice. Suffers from terrain landed on.",
    },
    {
      id: "attack-twice",
      keyword: "ATTACK TWICE",
      description:
        "Monster moves once then attacks two times. Each attack is resolved separately (includes reactions). If character is out of range between attacks, the monster may choose another target for 2nd attack as long it doesn't have to move.",
    },
    {
      id: "aura",
      keyword: "AURA",
      description:
        "A hero can only have one and is removed when the hero is KNOCKED OUT and receives a TRAUMA CUBE. (Not removed during Camp Phase)",
    },
    {
      id: "bear-trap",
      keyword: "BEAR TRAP",
      description: "All enemies in AREA take 2 non-preventable Damage, BLEED 2, DISCARD.",
    },
    {
      id: "bleed",
      keyword: "BLEED",
      description:
        "The Target takes X BLEED tokens. At the beginning of that character's next turn, it takes 1 non-preventable damage for each BLEED token it has and then removes all of them from its board. BLEED is a stackable Condition.",
    },
    {
      id: "bloodseeker",
      keyword: "BLOODSEEKER",
      description:
        "A Monster with Bloodseeker Targets the Weakest Hero (The one with the lowest Health at the moment) as its Primary Target.",
    },
    {
      id: "burn",
      keyword: "BURN",
      description:
        "The Target takes X BURN tokens. At the beginning of that character's next turn, it takes 1 non-preventable damage for each BURN token it has and then removes one of those tokens from its board. BURN is a stackable Condition.",
    },
    {
      id: "character",
      keyword: "CHARACTER",
      description:
        "Heroes, Monsters, Pets, NPCs, and Companions. All can receive effects like PREVENT, but only characters with cards or boards can hold Conditions or Resources.",
    },
    {
      id: "cleanse",
      keyword: "CLEANSE",
      description: "Target removes up to X CC and all POISON from its board.",
    },
    {
      id: "cleave",
      keyword: "CLEAVE",
      description: "Target up to X enemies adjacent to attacker as single Attack Roll.",
    },
    {
      id: "command",
      keyword: "COMMAND",
      description: "Activates the next Strongest Monster (not itself), then continues its turn.",
    },
    {
      id: "companions",
      keyword: "COMPANIONS",
      description:
        "Activates after the hero they follow, Move then Attack. Will only be attacked if no hero is in range. Top left number is STURDINESS. Can hold SHIELDS and receive PREVENT effects. Discharged during Camp Phase.",
    },
    {
      id: "copy",
      keyword: "COPY EFFECT",
      description:
        "Copies effect of another Hero skill including its base color (range). **Dungeon Roll Skills, Equipment Skills and Reactions, unless stated otherwise, cannot be copied.**",
    },
    {
      id: "covetous",
      keyword: "COVETOUS",
      description:
        "A Monster with Covetous Targets the Hero that is holding more Resource tokens (FOCUS, SHIELD, and KI are examples) as its Primary Target. If two Heroes are tied with the same number of Resource tokens, a Monster with Covetous targets the one among them who occupies the fastest Initiative Slot.",
    },
    {
      id: "cube-range",
      keyword: "CUBE RANGE (CR)",
      description:
        "Defined by color of cube used. Yellow (Melee) = Target on an adjacent SQUARE. Red (Ranged) = Target on any SQUARE up to 1 AREA away. Green (Agility) / Blue (Wisdom) = Target at any distance.",
    },
    {
      id: "cube-action",
      keyword: "CUBE ACTION (CA)",
      description:
        "Spending an AC. A hero can perform 2 AC per turn and may use other actions before, between or after each AC. Reactions do not count.",
    },
    {
      id: "crit-x",
      keyword: "CRIT X+",
      description: "Roll X or more on D20 gives Critical Hit (x2 DMG). Does not inflict double conditions.",
    },
    {
      id: "curse-cube",
      keyword: "CURSE CUBES (CC)",
      description:
        "Black cubes that are allocated to Hero or Dungeon Roles skills which block their use. Hero is corrupted upon receiving a 6th CC and ends the adventure.",
    },
    {
      id: "curse",
      keyword: "CURSE",
      description: "Target gains X CC as an effect.",
    },
    {
      id: "darkness-behavior",
      keyword: "DARKNESS BEHAVIOR",
      description:
        'Tries to reach the Strongest Hero not on top of Darkness. "Crush": If all Heroes are already on top of Darkness when a Rune is drawn, Skip spawning tile and all Heroes take N Damage. (N = Number of Heroes).',
    },
    {
      id: "darkness-effect",
      keyword: "DARKNESS EFFECT (STANDING ON IT)",
      description:
        "Deals 2 non-preventable Damage to a Hero (once per turn), Companion or Pet caught by it when spawned; stepped on it for first time in a turn; or ended their turn on top of it. Heroes: Imposes a -2 HIT penalty. Monsters: Gives +2 DMG bonus.",
    },
    {
      id: "defiant",
      keyword: "DEFIANT",
      description:
        "A Monster with Defiant Targets the Most Vigorous Hero (the one with most available Action Cubes at the moment) as its Primary Target.",
    },
    {
      id: "difficult-terrain",
      keyword: "DIFFICULT TERRAIN",
      description:
        "A character that is affected by Difficult Terrain (like Water) loses 1 movement point from its current move effect. As with any harmful terrain, a character can only be affected by Difficult Terrain once per turn.",
    },
    {
      id: "disarm",
      keyword: "DISARM",
      description: "(Counts as FATIGUE) EXPEND all available Melee and Ranged AC.",
    },
    {
      id: "discard",
      keyword: "DISCARD",
      description: "Remove that thing from your board.",
    },
    {
      id: "drain-health",
      keyword: "DRAIN HEALTH",
      description: "Target loses X amount of health and caster gains it. Reactions cannot be used.",
    },
    {
      id: "enemy",
      keyword: "ENEMY",
      description: "Any character that is not in your party or an NPC. Heroes are monster's enemies.",
    },
    {
      id: "engaged",
      keyword: "ENGAGED",
      description: "When a Character is adjacent to an Enemy. Ranged Attacks and most Minor Actions are not allowed.",
    },
    {
      id: "evolve",
      keyword: "EVOLVE",
      description: "Monster gains +2 DMG and +1 MOVE.",
    },
    {
      id: "expend",
      keyword: "EXPEND",
      description:
        "Move an available AC to Expended AC box on hero board. Expended AC can be recalled but not used for skills while there.",
    },
    {
      id: "falling-damage",
      keyword: "FALLING DAMAGE",
      description: "Character suffers 2 non-preventable Damage when descending two levels in a single step.",
    },
    {
      id: "fatigue",
      keyword: "FATIGUE",
      description: "Target must expend X (or as many as possible) of their available AC for no effect.",
    },
    {
      id: "fire-trap",
      keyword: "FIRE TRAP",
      description: "All enemies in AREA take 2 non-preventable Damage, BURN 4, DISCARD.",
    },
    {
      id: "flyby",
      keyword: "FLYBY",
      description:
        "This pet freely returns to a SQUARE of their choice adjacent to its master after attacking. Only affected by terrain/Darkness once landed.",
    },
    {
      id: "focus",
      keyword: "FOCUS",
      description:
        "The Target gains X FOCUS tokens, which they can later spend to use Focus Abilities. FOCUS is a stackable resource.",
    },
    {
      id: "free-recall",
      keyword: "FREE RECALL ACTION",
      description: "Hero takes a RECALL ACTION without taking a CC penalty.",
    },
    {
      id: "fruit-of-life",
      keyword: "FRUIT OF LIFE",
      description:
        "With a Use a Consumable Item Minor Action, a character holding a FRUIT OF LIFE may discard it to: SELF, HEAL 2. Additionally, these fruits are considered items and may be exchanged with other Heroes like any other item would normally be, but they do not occupy any bag space. FRUIT OF LIFE is a stackable resource.",
    },
    {
      id: "fury",
      keyword: "FURY",
      description:
        "When you hit with a Spell Attack or Weapon Attack, you may discard 1 FURY to add +1 DMG to your Attack. You may discard only 1 FURY token per turn or Reaction (If you have an ability that is also a Reaction, for example). FURY is stackable resource.",
    },
    {
      id: "heal",
      keyword: "HEAL",
      description: "Target regains X Health that cannot exceed max Health.",
    },
    {
      id: "immunity",
      keyword: "IMMUNITY",
      description:
        "This character cannot be affected by the conditions/effect. Stealth immunity means they can target that unit and cannot be surprised (x2 DMG).",
    },
    {
      id: "intimidate",
      keyword: "INTIMIDATE",
      description:
        "Character has -X DMG for each INTIMIDATE token they are holding. Unlike other Conditions, INTIMIDATE does not take effect at the beginning of their next turn, it lingers until removed instead. The next time the affected character makes an Attack (either a Weapon Attack or a Spell Attack), whether it hits or misses, it removes all INTIMIDATE tokens they are holding. INTIMIDATE is a stackable Condition.",
    },
    {
      id: "jump",
      keyword: "JUMP",
      description:
        "Same as MOVE X but only affected by terrain landed on and can move through enemies. Not affected by FALLING DAMAGE. Climbing up 2 levels still costs 2 movement.",
    },
    {
      id: "ki",
      keyword: "KI",
      description:
        "You may discard a KI to make a Weapon Attack with +0 HIT. Regardless if you have spent a KI to make a Weapon Attack or to use any other ability you have learned, you may only discard one KI per turn or Reaction (If you have an ability that is also a Reaction, for example). KI is stackable resource.",
    },
    {
      id: "knock-down",
      keyword: "KNOCK DOWN",
      description:
        "The Target receives a KNOCK DOWN token. Unlike other Conditions, KNOCK DOWN does not take effect at the beginning of the character's next turn, it lingers until removed instead. The next time the affected character receives a Move effect, it cancels that effect and removes their KNOCK DOWN token from their board. KNOCK DOWN is a redundant Condition.",
    },
    {
      id: "large-monster",
      keyword: "LARGE MONSTER",
      description:
        "This Monster is considered Large (even if its base is small-sized). A Large Monster is immune to KNOCK DOWN, PUSH, STUN, and TELEKINESIS.",
    },
    {
      id: "loot",
      keyword: "LOOT",
      description:
        "If this companion deals the killing blow to an enemy, replace the Target with a Chest. It is safe (no Trap die on opening) and is only an OBJECT (not SOLID).",
    },
    {
      id: "maelstrom",
      keyword: "MAELSTROM",
      description:
        "On Overlord's activation, you shuffle their Attack cards back into the deck and draw a new set (one per Hero).",
    },
    {
      id: "manifest",
      keyword: "MANIFEST",
      description:
        "Randomly take one Rune from the bag and reveal it, triggering the effect. Does not spawn Darkness and is placed back in the bag.",
    },
    {
      id: "most-corrupted-hero",
      keyword: "MOST CORRUPTED HERO",
      description:
        "The Hero with the most Curse Cubes is the Most Corrupted Hero. If two Heroes are tied with the same number of Curse Cubes, the Most Corrupted one among them will be the one who occupies the fastest Initiative Slot.",
    },
    {
      id: "most-tired-hero",
      keyword: "MOST TIRED HERO",
      description:
        "The Hero with the fewest available Action Cubes is the Most Tired Hero. If two Heroes are tied with the same number of available Action Cubes, the Most Tired one among them will be the one who occupies the slowest Initiative Slot.",
    },
    {
      id: "most-vigorous-hero",
      keyword: "MOST VIGOROUS HERO",
      description:
        "The Hero with the most available Action Cubes is the Most Vigorous Hero. If two Heroes are tied with the same number of available Action Cubes, the Most Vigorous one among them will be the one who occupies the fastest Initiative Slot.",
    },
    {
      id: "move",
      keyword: "MOVE",
      description:
        "Target may move up to X SQUARES orthogonally or diagonally. Cannot pass through SOLID OBJECTS or ENEMIES but can pass through not land on allies. Movement may be interrupted to do a Minor Action then continued, but using a CA or REACTION will lose remaining movement points.",
    },
    {
      id: "multishot",
      keyword: "MULTISHOT",
      description:
        "Character fires a single Ranged Attack at X different Targets within Range. Heroes make 1 attack roll.",
    },
    {
      id: "non-preventable",
      keyword: "NON-PREVENTABLE",
      description:
        "This damage cannot be prevented by any kind of effect, including SHIELD and/or PREVENT. Non-Preventable damage is not considered a threat and thus can't be responded to with Reactions.",
    },
    {
      id: "npc",
      keyword: "NPC",
      description:
        'NPC (Non-Player Characters) are the bystanders of a Campaign. Some NPC Tokens are used to represent your Companions on the board, while others just embody generic NPCs as "Villagers" or "Children." Regardless, an NPC Token is a Solid Object and every time they are used, they follow a set of special rules of their own. Each Adventure will describe exactly how these tokens interact with the players and the current Adventure.',
    },
    {
      id: "object",
      keyword: "OBJECT",
      description:
        "Traps, Darkness tiles, or others specified as such. Characters can pass through and end movement on them.",
    },
    {
      id: "outcome",
      keyword: "OUTCOME",
      description: "Only erased when commanded by another Interaction resolution.",
    },
    {
      id: "passive",
      keyword: "PASSIVE",
      description:
        "Ability is always active (including Commander Attack cards) unless blocked by TRAUMA CUBE or CURSE CUBE.",
    },
    {
      id: "pay-life",
      keyword: "PAY LIFE",
      description: "Hero takes X Damage to apply benefits. Cannot use if X > current Health.",
    },
    {
      id: "penitence",
      keyword: "PENITENCE",
      description: "Target takes 1 non-preventable Damage per CURSE CUBE.",
    },
    {
      id: "pet",
      keyword: "PET",
      description: "Some Heroes have companions and each one of them has its own token and a card with its attributes.",
    },
    {
      id: "primary-target",
      keyword: "PRIMARY TARGET",
      description:
        "A Monster's Primary Target is the character it seeks to attack during its turn. All Monsters that follow the Standard behavior have the Strongest Hero as their Primary Target, for example.",
    },
    {
      id: "prevent",
      keyword: "PREVENT",
      description: "Ignore up to X Damage that would be dealt to target within Range.",
    },
    {
      id: "protect",
      keyword: "PROTECT",
      description: "This character becomes the Target unless already a Target due to CLEAVE, MULTISHOT or STRIKE.",
    },
    {
      id: "poison",
      keyword: "POISON",
      description:
        "The Target takes X POISON tokens. At the beginning of that character's next turn, it takes 1 non-preventable damage for each POISON token it has. Unlike BLEED or BURN, POISON is not removed after dealing its damage. However, whenever a character receives a CLEANSE effect, it also removes all POISON affecting it. POISON is a stackable Condition.",
    },
    {
      id: "poison-trap",
      keyword: "POISON TRAP",
      description: "All enemies in AREA take 2 non-preventable Damage, POISON 2, DISCARD.",
    },
    {
      id: "push",
      keyword: "PUSH",
      description: "Push the Target X SQUARES away from the Caster in a straight line. Must be pushed entire length.",
    },
    {
      id: "range",
      keyword: "RANGE",
      description: "Range is counted using X AREAS away. RECALL X: Recover X Spent or Expended AC.",
    },
    {
      id: "rangers-mark",
      keyword: "RANGER'S MARK",
      description:
        "When a character is Marked, it receives a RANGER'S MARK token. All Weapon Attacks and Spell Attacks made by the Ranger against a character they marked deals +1 DMG. As mentioned earlier, this damage is doubled if the character scores a Critical Hit as normal.",
    },
    {
      id: "reaction",
      keyword: "REACTION",
      description:
        "Skill that can be used in response to a threat (taking preventable damage). Each hero can only use one Reaction per threat. Shields must be applied before and Reactions can still be used even if damage has been reduced to 0.",
    },
    {
      id: "recall",
      keyword: "RECALL",
      description:
        "You recover to your Available Action Cubes box up to X Spent or Expended Action Cubes from your board.",
    },
    {
      id: "reckoner",
      keyword: "RECKONER",
      description:
        "A Monster with Reckoner Targets the Most Corrupted Hero (The one with most Curse Cubes at the moment) as its Primary Target.",
    },
    {
      id: "regain-your-breath",
      keyword: "REGAIN YOUR BREATH",
      description: "Recover from being KNOCKED OUT.",
    },
    {
      id: "redundant",
      keyword: "REDUNDANT",
      description:
        "A redundant effect means that a character can only hold one token of that specific effect. If a character would gain a second token for a redundant effect, just ignore it.",
    },
    {
      id: "regeneration",
      keyword: "REGENERATION",
      description: "Character regains X Health that cannot exceed max Health.",
    },
    {
      id: "relentless",
      keyword: "RELENTLESS",
      description:
        "A Monster with Relentless Targets the Most Tired Hero (The one with fewer available Action Cubes at the moment) as its Primary Target.",
    },
    {
      id: "reroll",
      keyword: "REROLL",
      description:
        "When a Skill has REROLL, it means that you get one free reroll of the d20 for one Weapon Attack performed by that Skill that you may choose to use when you miss.",
    },
    {
      id: "retaliate",
      keyword: "RETALIATE",
      description: "Inflict X Damage to attacker within CR or any range otherwise. Caster must be one of the targets.",
    },
    {
      id: "roll",
      keyword: "ROLL",
      description: "Triggers a benefit for attack roll on natural roll. +X HIT modifiers do not trigger this.",
    },
    {
      id: "self",
      keyword: "SELF",
      description:
        'Abilities with the SELF Keyword can only target the casting character. For example: "SELF, PREVENT 3" means that the character can prevent 3 damage from themselves only.',
    },
    {
      id: "shadow-aura",
      keyword: "SHADOW AURA",
      description: "A small Darkness tile is placed under Target.",
    },
    {
      id: "shield",
      keyword: "SHIELD",
      description:
        "The target gains X SHIELD tokens. Each SHIELD token can be used to absorb 1 point of incoming damage against the character. You must use all of your SHIELD tokens before losing any Health or using a PREVENT effect—you cannot choose to take the damage and keep your SHIELD tokens or to PREVENT the damage with another Skill in order to save them. SHIELD tokens are a stackable resource.",
    },
    {
      id: "shove",
      keyword: "SHOVE",
      description:
        "When two characters would occupy the same space and one of them has priority over the other, we say that the first will shove the second. When a character is shoved, it is moved to a square that is adjacent to the area (blue square) that it previously occupied. The Party Leader chooses to where a Monster would be shoved to, while a shoved Hero can choose their new position for themselves. Characters suffer the effects of stepping on harmful terrain when they are shoved into them (if they have not suffered them already this turn.)",
    },
    {
      id: "silence",
      keyword: "SILENCE",
      description: "(Counts as FATIGUE) EXPEND all Agility and Wisdom.",
    },
    {
      id: "slaughter",
      keyword: "SLAUGHTER",
      description: "A Monster with Slaughter Targets NPC Tokens (non-Companions) as its Primary Target.",
    },
    {
      id: "solid-objects",
      keyword: "SOLID OBJECTS",
      description:
        "Characters, Chests, Interactions, Piles of Runes, NPCs, and others specified as such during a setup.",
    },
    {
      id: "spell-attack",
      keyword: "SPELL ATTACK",
      description: "Magic skill that always succeeds, inflicting damage.",
    },
    {
      id: "split",
      keyword: "SPLIT",
      description:
        "Caster can split the effect among any number of targets within Range. Bonuses give to total not each split.",
    },
    {
      id: "slow",
      keyword: "SLOW",
      description:
        "The Target receives a SLOW token. Unlike other Conditions, SLOW does not take effect at the beginning of that character's next turn, it lingers until removed instead. The next time the affected character receives a Move effect, it loses 2 movement points from that effect and removes their SLOW token from their board. SLOW is a redundant Condition.",
    },
    {
      id: "stackable",
      keyword: "STACKABLE",
      description:
        "The Stackable property means that a character can hold up to 4 copies of a same token on their boards/cards. A two-sided token that displays the faces 1 and 2 must always be considered as if it was the number of individual tokens indicated. If a character would receive a fifth token of a Stackable effect, just ignore it. Example: 2 tokens of Focus 2 and 4 tokens of Focus 1 are considered Focus 4 either way.",
    },
    {
      id: "status",
      keyword: "STATUS",
      description:
        "Status is a reward related to a choice a character made during the story. Some Statuses can give special abilities as if they were some kind of blessing, while others are just related to the story. Regardless, a character can have any number of Statuses noted on their Campaign Log and all Statuses are erased during the next Camp Phase.",
    },
    {
      id: "stealth",
      keyword: "STEALTH",
      description:
        'The Target receives a STEALTH Token and is considered hidden while they are holding it. Characters without Immunity to STEALTH do not count a hidden character either as their Target nor an enemy for engagement purposes (they still can\'t pass through them if they are enemies). Hidden characters still take damage from area Attacks such as STRIKE and from Darkness. At the beginning of its next turn, the character is no longer hidden and must discard its STEALTH token.<br><br>Alternatively, as many seasoned assassins do, a character can end their STEALTH sooner by trying to Surprise a Target. Thus, if a character with a STEALTH token makes a Weapon Attack, whether it hits or not, it Immediately loses STEALTH. On the other hand, if the Attack hits, it gains DOUBLE DAMAGE if the attacking character was considered hidden from its Target. This is called "Surprise." Characters immune to STEALTH cannot be Surprised.',
    },
    {
      id: "square",
      keyword: "SQUARE",
      description: "Refers to a white square on map tile. ",
    },
    {
      id: "strike",
      keyword: "STRIKE",
      description: "Targets all characters in X AREAS within Range. Melee must be AREAS adjacent to own SQUARE.",
    },
    {
      id: "strongest-hero",
      keyword: "STRONGEST HERO",
      description:
        "The Hero with the most Health at the moment. Monsters often target the Strongest Hero. If two Heroes are tied with the most Health, the Strongest one among then will be the one who occupies the fastest Initiative Slot.",
    },
    {
      id: "stun",
      keyword: "STUN",
      description:
        "STUN works differently between Heroes and Monsters. When the STUN effect is resolved at the beginning of a Monster's turn, that Monster loses its Attack action for that turn and then removes the STUN token (it will still take its Move action). At the beginning of an affected Hero's turn, on the other hand, they lose one of their two allowed Cube Actions for that turn and then remove the token from their board. STUN is a redundant Condition.",
    },
    {
      id: "sturdiness",
      keyword: "STURDINESS",
      description: "Damage exceeding this number defeats the companion.",
    },
    {
      id: "swap",
      keyword: "SWAP",
      description: "Two objects trade positions amd CHARACTERS are affected by harmful terrain or Darkness landed on.",
    },
    {
      id: "telekinesis",
      keyword: "TELEKINESIS",
      description:
        "Move any small-sized object (including small Darkness tiles) or SOLID OBJECTS (except Interactions) up to X SQUARES. Target is affected by harmful terrain or Darkness landed on including FALLING DAMAGE.",
    },
    {
      id: "trample",
      keyword: "TRAMPLE",
      description: "Pass through but not end on ENEMIES. Inflicts X Damage to each trampled enemy once.",
    },
    {
      id: "trap",
      keyword: "TRAP",
      description:
        "Place a Trap token in the center of an area that is adjacent to your area (blue square). The first time an enemy activates within that area or moves into that area, the Trap is triggered. All enemies inside that area are affected by the Trap, then remove the Trap token. There can only be 1 Trap token in an area at a time.",
    },
    {
      id: "trauma-cube",
      keyword: "TRAUMA CUBE (TC)",
      description:
        "Purple cubes that are allocated to Hero or Dungeon Roles skills which blocks their use. Hero is killed upon receiving a 2nd TRAUMA CUBE and ends the adventure.",
    },
    {
      id: "trick-or-treat",
      keyword: "TRICK OR TREAT",
      description: "Tharmagar's controller chooses RANGE 1, HEAL 2 or RANGE 1, (BLEED 2 or BURN 2 or POISON 2).",
    },
    {
      id: "unique",
      keyword: "UNIQUE",
      description:
        "This pet can only be summoned a specific skill. Otherwise, once summoned, pet-activation skills can be used.",
    },
    {
      id: "vicious",
      keyword: "VICIOUS",
      description: "The damage dealt by this Monster's attack is non-preventable.",
    },
    {
      id: "weapon-attack",
      keyword: "WEAPON ATTACK",
      description:
        "Attack skill using your Weapon. Roll D20, attack succeeds if roll is equal to or greater than Weapon hit chance after applying HIT modifiers. Attacking from a higher level than the Target gives +2 HIT; however, attacking from a lower level gives -2 HIT. By default, before HIT modifiers, a roll of 1 is always a Critical Failure and a roll of 20 is a Critical Hit (x2 DMG).",
    },
    {
      id: "wild-cube",
      keyword: "WILD CUBE",
      description:
        "Considered to be any color AC. Hero Skill (not Dungeon Roles or Equipment) effects are doubled including conditions.",
    },
    {
      id: "x",
      keyword: "X",
      description:
        "Any variable 'X' on a Monster or Attack card means the number of Rune tokens on the Initiative Track that matches that Attack's Rune.",
    },
  ];
}

import BleedImageUrl from "@/assets/tokens/token-bleed.png";
import Bleed1ImageUrl from "@/assets/tokens/token-bleed-1.png";
import Bleed2ImageUrl from "@/assets/tokens/token-bleed-2.png";
import Bleed3ImageUrl from "@/assets/tokens/token-bleed-3.png";
import Bleed4ImageUrl from "@/assets/tokens/token-bleed-4.png";
import BurnImageUrl from "@/assets/tokens/token-burn.png";
import Burn1ImageUrl from "@/assets/tokens/token-burn-1.png";
import Burn2ImageUrl from "@/assets/tokens/token-burn-2.png";
import Burn3ImageUrl from "@/assets/tokens/token-burn-3.png";
import Burn4ImageUrl from "@/assets/tokens/token-burn-4.png";
import KnockDownImageUrl from "@/assets/tokens/token-knocked-down.png";
import IntimidateImageUrl from "@/assets/tokens/token-intimidate.png";
import Intimidate1ImageUrl from "@/assets/tokens/token-intimidate-1.png";
import Intimidate2ImageUrl from "@/assets/tokens/token-intimidate-2.png";
import Intimidate3ImageUrl from "@/assets/tokens/token-intimidate-3.png";
import Intimidate4ImageUrl from "@/assets/tokens/token-intimidate-4.png";
import PoisonImageUrl from "@/assets/tokens/token-poison.png";
import Poison1ImageUrl from "@/assets/tokens/token-poison-1.png";
import Poison2ImageUrl from "@/assets/tokens/token-poison-2.png";
import Poison3ImageUrl from "@/assets/tokens/token-poison-3.png";
import Poison4ImageUrl from "@/assets/tokens/token-poison-4.png";
import RangersMarkImgUrl from "@/assets/tokens/token-rangers-mark.png";
import SlowImageUrl from "@/assets/tokens/token-slow.png";
import StealthImageUrl from "@/assets/tokens/token-stealth.png";
import StunImageUrl from "@/assets/tokens/token-stun.png";

export interface ICondition {
    name: string;
    count: number;
    maxCount: number;
    description: string;
    images: string[];
}

class Condition implements ICondition {
    constructor(object: any) {
        this.name = object.name;
        this.count = 0;
        this.maxCount = object.maxCount;
        this.description = object.description;
        this.images = object.images;
    }
    name: string;
    count: number;
    maxCount: number;
    description: string;
    images: string[];
}

const MAX_STACKABLE_COUNT : number = 4;
class StackableCondition extends Condition {
    constructor(object: any) {
        object.maxCount = MAX_STACKABLE_COUNT;
        super(object);
    }
}

const MAX_REDUNDANT_COUNT : number = 1;
class RedundantCondition extends Condition {
    constructor(object: any) {
        object.maxCount = MAX_REDUNDANT_COUNT;
        super(object);
    }
}

export const Bleed : StackableCondition = new StackableCondition({
    name: "Bleed",
    images: [BleedImageUrl, Bleed1ImageUrl, Bleed2ImageUrl, Bleed3ImageUrl, Bleed4ImageUrl],
});

export const Poison : StackableCondition = new StackableCondition({
    name: "Poison",
    images: [PoisonImageUrl, Poison1ImageUrl, Poison2ImageUrl, Poison3ImageUrl, Poison4ImageUrl],
});

export const Burn : StackableCondition = new StackableCondition({
    name: "Burn",
    images: [BurnImageUrl, Burn1ImageUrl, Burn2ImageUrl, Burn3ImageUrl, Burn4ImageUrl],
});

export const Stun : RedundantCondition = new RedundantCondition({
    name: "Stun",
    images: [StunImageUrl, StunImageUrl],
});

export const KnockDown : RedundantCondition = new RedundantCondition({
    name: "Knock Down",
    images: [KnockDownImageUrl, KnockDownImageUrl],
});

export const Slow : RedundantCondition = new RedundantCondition({
    name: "Slow",
    images: [SlowImageUrl, SlowImageUrl],
});

export const RangersMark : RedundantCondition = new RedundantCondition({
    name: "Ranger's Mark",
    images: [RangersMarkImgUrl, RangersMarkImgUrl],
});

export const Intimidate : StackableCondition = new StackableCondition({
    name: "Intimidate",
    image: [IntimidateImageUrl, Intimidate1ImageUrl, Intimidate2ImageUrl, Intimidate3ImageUrl, Intimidate4ImageUrl],
});

export const Stealth : RedundantCondition = new RedundantCondition({
    name: "Stealth",
    image: [StealthImageUrl, StealthImageUrl],
});

export const Conditions : ICondition[] = [Bleed, Burn, KnockDown, Poison, RangersMark, Slow, Stun,];
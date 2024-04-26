import BleedImageUrl from "@/assets/tokens/token-bleed.png";
import BurnImageUrl from "@/assets/tokens/token-burn.png";
import KnockDownImageUrl from "@/assets/tokens/token-knocked-down.png";
import IntimidateImageUrl from "@/assets/tokens/token-intimidate.png";
import PoisonImageUrl from "@/assets/tokens/token-poison.png";
import RangersMarkImgUrl from "@/assets/tokens/token-rangers-mark.png";
import SlowImageUrl from "@/assets/tokens/token-slow.png";
import StealthImageUrl from "@/assets/tokens/token-stealth.png";
import StunImageUrl from "@/assets/tokens/token-stun.png";

export interface ICondition {
    name: string;
    count: number;
    description: string;
    image: string;
}

class Condition implements ICondition {
    constructor(object: any) {
        this.name = object.name;
        this.count = 0;
        this.maxCount = object.maxCount;
        this.description = object.description;
        this.image = object.image;
    }
    name: string;
    count: number;
    maxCount: number;
    description: string;
    image: string;
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

export const Bleeding : StackableCondition = new StackableCondition({
    name: "Bleeding",
    image: BleedImageUrl,
});

export const Poison : StackableCondition = new StackableCondition({
    name: "Poison",
    image: PoisonImageUrl,
});

export const Burning : StackableCondition = new StackableCondition({
    name: "Burning",
    image: BurnImageUrl,
});

export const Stun : RedundantCondition = new RedundantCondition({
    name: "Stun",
    image: StunImageUrl,
});

export const KnockDown : RedundantCondition = new RedundantCondition({
    name: "Knock Down",
    image: KnockDownImageUrl,
});

export const Slow : RedundantCondition = new RedundantCondition({
    name: "Slow",
    image: SlowImageUrl,
});

export const RangersMark : RedundantCondition = new RedundantCondition({
    name: "Ranger's Mark",
    image: RangersMarkImgUrl,
});

export const Intimidate : RedundantCondition = new StackableCondition({
    name: "Intimidate",
    image: IntimidateImageUrl,
});

export const Stealth : RedundantCondition = new RedundantCondition({
    name: "Stealth",
    image: StealthImageUrl,
});

export const Conditions : ICondition[] = [Bleeding, Burning, KnockDown, Poison, RangersMark, Slow, Stun,];
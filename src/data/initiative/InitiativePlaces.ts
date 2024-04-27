import TopOrangeImgUrl from "@/assets/initiative/top-orange.png";
import TopGreenImgUrl from "@/assets/initiative/top-green.png";
import TopBlueImgUrl from "@/assets/initiative/top-blue.png";
import TopRedImgUrl from "@/assets/initiative/top-red.png";
import TopGrayImgUrl from "@/assets/initiative/top-gray.png";
import BottomOrangeImgUrl from "@/assets/initiative/bottom-orange.png";
import BottomGreenImgUrl from "@/assets/initiative/bottom-green.png";
import BottomBlueImgUrl from "@/assets/initiative/bottom-blue.png";
import BottomRedImgUrl from "@/assets/initiative/bottom-red.png";
import BottomGrayImgUrl from "@/assets/initiative/bottom-gray.png";

export default class InitiativePlaces {
    static readonly DEFENDER: number = 0;
    static readonly TOP_ORANGE: number = 1;
    static readonly TOP_GREEN: number = 2;
    static readonly LEADER: number = 3;
    static readonly TOP_BLUE: number = 4;
    static readonly TOP_RED: number = 5;
    static readonly CONTROLLER: number = 6;
    static readonly TOP_GRAY: number = 7;
    static readonly BOTTOM_ORANGE: number = 8;
    static readonly SUPPORT: number = 9;
    static readonly BOTTOM_GREEN: number = 10;
    static readonly BOTTOM_BLUE: number = 11;
    static readonly STRIKER: number = 12;
    static readonly BOTTOM_RED: number = 13;
    static readonly BOTTOM_GRAY: number = 14;
    static readonly RUNE: number = 15;
}

export class InitiativeTypes {
    static readonly HERO: string = "hero";
    static readonly MONSTER: string = "monster";
    static readonly RUNE: string = "rune";
}

export const InitiativeList = [
    {
        type: InitiativeTypes.HERO,
        index: InitiativePlaces.DEFENDER,
        text: "DEFENDER",
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.TOP_ORANGE,
        imgUrl: TopOrangeImgUrl,
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.TOP_GREEN,
        imgUrl: TopGreenImgUrl,
    },
    {
        type: InitiativeTypes.HERO,
        index: InitiativePlaces.LEADER,
        text: "LEADER",
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.TOP_BLUE,
        imgUrl: TopBlueImgUrl,
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.TOP_RED,
        imgUrl: TopRedImgUrl,
    },
    {
        type: InitiativeTypes.HERO,
        index: InitiativePlaces.CONTROLLER,
        text: "CONTROLLER",
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.TOP_GRAY,
        imgUrl: TopGrayImgUrl,
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.BOTTOM_ORANGE,
        imgUrl: BottomOrangeImgUrl,
    },
    {
        type: InitiativeTypes.HERO,
        index: InitiativePlaces.SUPPORT,
        text: "SUPPORT",
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.BOTTOM_GREEN,
        imgUrl: BottomGreenImgUrl,
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.BOTTOM_BLUE,
        imgUrl: BottomBlueImgUrl,
    },
    {
        type: InitiativeTypes.HERO,
        index: InitiativePlaces.STRIKER,
        text: "STRIKER",
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.BOTTOM_RED,
        imgUrl: BottomRedImgUrl,
    },
    {
        type: InitiativeTypes.MONSTER,
        index: InitiativePlaces.BOTTOM_GRAY,
        imgUrl: BottomGrayImgUrl,
    },
    {
        type: InitiativeTypes.RUNE,
        index: InitiativePlaces.RUNE,
        text: "RUNE",
    }
];

export const INITIATIVE_ORANGE: string = "e88555";
export const INITIATIVE_GREEN: string = "5e1690";
export const INITIATIVE_BLUE: string = "6c72c4";
export const INITIATIVE_RED: string = "eb4c4f";
export const INITIATIVE_GRAY: string = "dcdcdc";
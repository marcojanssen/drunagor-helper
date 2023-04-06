import { useStorage } from "@vueuse/core";
import * as _ from "lodash-es";
import { defineStore } from "pinia";
import type { Member } from "./Member";

export const PartyStore = defineStore("party", () => {
  const members = useStorage("PartyStore.members", [] as Member[]);

  function has(heroId: string): boolean {
    const inParty = _.find(members.value, { heroId: heroId });
    if (inParty == undefined) {
      return false;
    }
    return true;
  }

  function find(heroId: string): Member {
    const member = _.find(members.value, { heroId: heroId });
    if (member == undefined) {
      throw new Error("Member could not be found: " + heroId);
    }
    return member;
  }

  function findAll(): Member[] {
    return members.value;
  }

  function addMember(member: Member) {
    members.value.push(member);
  }

  function removeMember(heroId: string) {
    members.value = members.value.filter((member: Member) => {
      if (member.heroId === heroId) {
        return false;
      }
      return true;
    });
  }

  return {
    members,
    has,
    find,
    findAll,
    addMember,
    removeMember,
  };
});

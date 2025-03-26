import { MemberEntity } from "@/models/member.entity";

export const createDefaultMember = (): MemberEntity => {
  return {
    id: "",
    login: "",
    name: "",
    avatarUrl: "",
  };
};

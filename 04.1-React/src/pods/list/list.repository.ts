import { getMemberList as getMemberListApi } from "./list.api";
import { MemberEntity } from "@/models/member-model";

export const getMembersCollection = (
  search: string
): Promise<MemberEntity[]> => {
  return getMemberListApi(search).then((json) => {
    const members: MemberEntity[] = [];
    json.forEach((member: MemberEntity) => {
      const memberEntity: MemberEntity = {
        id: member.id,
        login: member.login,
        name: member.name,
        avatarUrl: member.avatarUrl,
      };
      members.push(memberEntity);
    });
    return members;
  });
};

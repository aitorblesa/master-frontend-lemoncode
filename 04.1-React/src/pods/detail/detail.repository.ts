import { getMemberDetail as getMemberDetailApi } from "./detail.api";
import { MemberDetailApi } from "./detail.api-model";
import { MemberEntity } from "@/models/member-model";

export const getMemberCollection = (id: string): Promise<MemberDetailApi> => {
  return getMemberDetailApi(id).then((json) => {
    const memberDetail: MemberEntity = {
      id: json.id,
      login: json.login,
      name: json.name,
      avatarUrl: json.avatar_url,
    };

    return memberDetail;
  });
};

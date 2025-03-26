import { MembersListEntity } from "./list.api-model";

export const getMemberList = (search: string): Promise<MembersListEntity> =>
  fetch(`https://api.github.com/orgs/${search}/members`).then((response) =>
    response.json()
  );

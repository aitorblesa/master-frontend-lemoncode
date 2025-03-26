import React, { useState, useEffect } from "react";
import { createDefaultMember } from "./detail.vm";
import { getMemberCollection } from "./detail.repository";
import { DetailComponent } from "./detail.component";
import { MemberEntity } from "./detail.vm";

interface Props {
  id: string;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const [member, setMember] = useState<MemberEntity>(createDefaultMember());

  useEffect(() => {
    getMemberCollection(id).then((memberDetail) => setMember(memberDetail));
  }, []);

  return <DetailComponent member={member} />;
};

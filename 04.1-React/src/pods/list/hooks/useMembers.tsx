import { useState } from "react";
import { MemberEntity } from "@/models/member-model";
import { getMembersCollection } from "../list.repository";

export function useMembers({ search }: { search: string }) {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [error, setError] = useState(null);

  const getMembers = async () => {
    try {
      const newMembers = await getMembersCollection(search);
      setMembers(newMembers);
      console.log(newMembers);
      setError(null);
    } catch (e) {
      setMembers([]);
      setError(e);
    }
  };

  return { members, getMembers, error };
}

import { useState } from "react";
import { searchMembers } from "../services/members.js";
import { MemberEntity } from "../models/member.jsx";


export function useMembers({ search }) {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [error, setError] = useState(null);

  const getMembers = async () => {
    try {
      const newMembers = await searchMembers({ search });
      setMembers(newMembers);
      setError(null);
    } catch (e) {
      setMembers([]);
      setError(e);
    }
  };

  return { members, getMembers, error };
}

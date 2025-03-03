import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useMembers } from "../hooks/useMembers";

// interface MemberEntity {
//   id: string;
//   login: string;
//   avatar: string;
// }

export function ListMembers() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMembers({ search });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [search, setSearch] = useState("lemoncode");
  const { members, getMembers } = useMembers({ search });

  useEffect(() => {
    getMembers({ search });
  }, []);

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Lemoncode"
            value={search}
          />
          <button type="submit">Buscar Miembros</button>
        </form>
      </header>
      <div className="list">
        <ul>
          {members.map(({ id, login, avatar }) => (
            <li key={id}>
              <img src={avatar} alt={login} />
              <Link to={`/detail/${login}`}>{login}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

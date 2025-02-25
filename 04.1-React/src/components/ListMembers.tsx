import { Link } from "react-router-dom";
interface MemberEntity {
  id: string;
  login: string;
  avatar: string;
}

export function ListMembers({ members }: { members: MemberEntity[] }) {
  return (
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
  );
}

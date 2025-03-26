import { Link } from "react-router-dom";
import { MemberEntity } from "./detail.vm";
import { routes } from "@/router";

interface Props {
  member: MemberEntity;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <>
      <h3>Login: {member.login}</h3>
      <h3>User Id: {member.id}</h3>
      <h3>Name: {member.name}</h3>
      <Link to={routes.root}>Vuelve a la lista</Link>
    </>
  );
};

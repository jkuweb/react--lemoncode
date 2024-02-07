import React from "react";
import { MemberEntity } from "./member-list";
import { Link, generatePath, useParams } from "react-router-dom";

export const MemberDetail: React.FC = () => {
  const [member, setMember] = React.useState<MemberEntity>({
    id: 0,
    login: "",
    avatar_url: "",
  });

  const { login, org } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setMember);
  }, [login]);

  return (
    <>
      <div className="member-detail__container">
        <div>
          <img src={member.avatar_url} alt={member.login} />
        </div>
        <div>
          <p>Login: {member.login}</p>
        </div>
        <div>
          <p>ID: {member.id}</p>
        </div>
      </div>
      <Link to={generatePath("/list/:org", { org: org })}>
        Volver a la lista
      </Link>
    </>
  );
};

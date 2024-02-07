import React from "react";
import { MemberEntity } from "./member-list";
import { useParams } from "react-router-dom";

export const MemberDetail: React.FC = () => {
  const [member, setMember] = React.useState<MemberEntity>({
    id: 0,
    login: "",
    avatar_url: "",
  });

  const { login } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setMember);
  }, [login]);

  return (
    <div className="member-detail__container">
      <div>
        <img src={member.avatar_url} alt={member.login} />
      </div>
      <div>
        <p>{member.login}</p>
      </div>
      <div>
        <p>{member.id}</p>
      </div>
    </div>
  );
};

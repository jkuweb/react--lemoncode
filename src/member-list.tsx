import React from "react";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const MemberList = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch("----://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then(setMembers);
  }, []);

  return (
    <>
      <h1>Member-list</h1>
      <div className="member-list__container">
        <div className="member-list__header">
          <span>Avatar</span>
          <span>ID</span>
          <span>Login</span>
        </div>
        <ul className="member-list__list">
          {members.map((member) => (
            <li key={member.id} className="member-list__list-item">
              <img src={member.avatar_url} />
              <span>{member.id}</span>
              <span>{member.login}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

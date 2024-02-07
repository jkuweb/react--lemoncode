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
      <ul>
        {members.map((member) => (
          <li>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <span>{member.login}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

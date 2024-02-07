import React from "react";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const MemberList = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState("");
  const [org, setOrg] = React.useState("lemoncode");

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}/members`)
      .then((response) => response.json())
      .then(setMembers);
  }, [org]);

  return (
    <>
      <h1>Member-list</h1>
      <div className="search-bar">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button onClick={() => setOrg(filter)}>Buscar</button>
      </div>
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

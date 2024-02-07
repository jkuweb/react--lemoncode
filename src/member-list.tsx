import React from "react";
import { Link, generatePath } from "react-router-dom";
import { FilterContext } from "./filter.provider";
import { usePagination } from "./hooks/pagination.hook";

export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const MemberList: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [searchText, setSearchText] = React.useState("");
  const { filter, setFilter } = React.useContext(FilterContext);

  const initialState = {
    currentPage: 1,
    pageSize: 10,
    total: members.length,
  };

  // pagination
  const [state, actions] = usePagination(initialState);

  const start = (state.currentPage - 1) * state.pageSize;
  const end = state.currentPage * state.pageSize;
  const elementsToDisplay = members.slice(start, end);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then(setMembers);
  }, [filter]);

  return (
    <>
      <h1 className="member-list__heading">Member-list</h1>
      <div className="member-list__search-bar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => setFilter(searchText)}>Buscar</button>
      </div>
      <div className="member-list__container">
        <div className="member-list__header">
          <span>Avatar</span>
          <span>ID</span>
          <span>Login</span>
        </div>
        <ul className="member-list__list">
          {elementsToDisplay.map((member) => (
            <li key={member.id} className="member-list__list-item">
              <img src={member.avatar_url} />
              <span>{member.id}</span>
              <span>
                <Link
                  to={generatePath("/:org/detail/:login", {
                    login: member.login,
                    org: filter,
                  })}
                >
                  {member.login}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <button onClick={actions.prevPage} disabled={state.currentPage === 1}>
            Prev
          </button>
        </div>
        <div>
          <button
            onClick={actions.nextPage}
            disabled={
              state.currentPage === Math.ceil(members.length / state.pageSize)
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

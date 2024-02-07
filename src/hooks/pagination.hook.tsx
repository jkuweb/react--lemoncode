import React from "react";

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  total: number;
}

interface PaginationActions {
  nextPage: () => void;
  prevPage: () => void;
  jumpToPage: (page: number) => void;
}

export const usePagination = (
  initialState: PaginationState
): [PaginationState, PaginationActions] => {
  const [state, setState] = React.useState(initialState);

  const nextPage = () => {
    setState((prevState) => {
      const currentPage = prevState.currentPage + 1;
      return { ...prevState, currentPage };
    });
  };

  const prevPage = () => {
    setState((prevState) => {
      const currentPage = prevState.currentPage - 1;
      return { ...prevState, currentPage };
    });
  };
  const jumpToPage = (page: number) => {
    setState((prevState) => {
      return { ...prevState, currenPage: page };
    });
  };

  return [state, { nextPage, prevPage, jumpToPage }];
};

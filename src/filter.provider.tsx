import React from "react";
import { PropsWithChildren } from "react";

interface FilterContextModel {
  filter: string;
  setFilter: (value: string) => void;
}

export const FilterContext = React.createContext<FilterContextModel>(null);

export const FilterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [filter, setFilter] = React.useState("lemoncode");
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

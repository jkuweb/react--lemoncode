import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MemberList } from "./member-list";
import { MemberDetail } from "./member-detail";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MemberList />} />
          <Route path="/detail/:login" element={<MemberDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

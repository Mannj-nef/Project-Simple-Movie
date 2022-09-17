import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Main = () => {
  return (
    <div className="py-10 container bg-[#222126]">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;

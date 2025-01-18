import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default App;

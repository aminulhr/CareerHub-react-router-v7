import React from "react";
import { Outlet } from "react-router";
import Footer from "./../Footer/Footer";

const App = () => {
  return (
    <div>
      <h1>Welcome </h1>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;

import React from "react";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
const routes = {
  "/": () => <Home />,
  "/work": () => <Work />,
};

export default routes;

import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import Settings from "./Settings";

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Settings path="/settings" />
    </Router>
  );
};

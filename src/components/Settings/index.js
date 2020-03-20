import React from "react";
import { Link } from "@reach/router";

export default () => {
  return (
    <div>
      <nav>
        <Link to="/">home</Link>
        <Link to="settings">settings</Link>
      </nav>
      <p>settings</p>
    </div>
  );
};

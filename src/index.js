import React from "react";
import { render } from "react-dom";
import "./index.scss";

const App = () => {
  return (
    <div>
      <h1>
        App currently running in {`${process.env.NODE_ENV || "production"}`}
      </h1>
    </div>
  );
};

render(<App />, document.getElementById("app"));

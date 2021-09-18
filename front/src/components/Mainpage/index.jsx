import React from "react";
import "./index.css";

import Navigation from "../Navigation";
import Bottom from "../Bottom";

const Mainpage = () => {
  return (
    <div>
      <Navigation />
      <body>
        <main>
          <div class="box1">
            <h1>Box 1</h1>
          </div>
          <div class="box2">
            <h1>Box 2</h1>
          </div>
        </main>
      </body>

      <Bottom />
    </div>
  );
};

export default Mainpage;

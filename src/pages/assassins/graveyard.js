import * as React from "react";

import "./style.css";

const GraveyardPage = () => {
  return (
    <html>
      <head></head>
      <body>
        <div id="graveyard-page">
          <h1>graveyard</h1>
          <p>
          <a href="/assassins">&larr; back</a>
          <br/>
          Number of deaths: <span style={{color: "red"}}>0</span>
          <br/>
          Number of alive: <span style={{color: "green"}}>36</span>
          </p>
        </div>

      </body>
    </html>
  );
};

export default GraveyardPage;

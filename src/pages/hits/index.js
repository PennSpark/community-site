import * as React from "react";

import "./style.css";

export default function HitsPage() {
  return (
    <div>
      <div className="hit-counters-visible">
        <h2>
          <a href="/">&larr; home</a>
        </h2><br/>
        <h3>Jan 27 2022</h3>
        <br />
        <h3>TOTAL HITS</h3>
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=7933305&style=0007&nbdigits=6&type=page&initCount=0"
          alt="total hits"
        />
        <br />
        <br />
        <h3>UNIQUE VISITORS</h3>
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=7933306&style=0007&nbdigits=6&type=ip&initCount=0"
          alt="unique visitors"
        />
      </div>
    </div>
  );
}

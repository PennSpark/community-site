import React from "react";

import "../../styles/global.css";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="hit-counters">
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=7933305&style=0007&nbdigits=6&type=page&initCount=0"
          alt="total hits"
        />
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=7933306&style=0007&nbdigits=6&type=ip&initCount=0"
          alt="unique visitors"
        />
      </div>
    </div>
  );
}

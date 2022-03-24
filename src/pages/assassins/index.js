import * as React from "react";

import RulesPdf from "./Assassins_Rules.pdf";

import "./style.css";

const AssassinsPage = () => {
  return (
    <html>
      <head></head>
      <body>
        <div id="assassins-page">
          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.8)", fontSize: "2rem", padding: "24px", border: "5px solid purple", margin: "20px"  }}>
            <h1><a href="https://thesign.al/" target="_blank">signal</a> x <a href="http://pennspark.org/" target="_blank">spark</a> assassins</h1><br/>

            <p>SITE LAST UPDATED: March 24, 6:47pm EST</p><br/>
            <p>
              <a href={RulesPdf} target="_blank" style={{color: "#1d6cf5"}}>Game Rules &rarr;</a>
            </p>
            <p>
              <a href="graveyard" style={{color: "#b82416"}}>Graveyard &rarr;</a>
            </p><br/>
          </div>

          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.8)", padding: "24px", border: "5px solid green", margin: "20px" }}>
            <h2>ACTIVITY LOG</h2><br/>

            <p style={{textAlign: "left", margin: "24px"}}>
              <ol>
                <li></li>
              </ol>
            </p>          
          </div>

          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.8)", padding: "24px", border: "5px solid blue", margin: "20px"  }}>
            <h2>PATCH NOTES</h2><br/>
            <p style={{ fontSize: "1.1rem", lineHeight: "140%", textAlign: "left" }}>
            <p style={{textAlign: "center"}}>3.1</p>
              <br />
              &bull; If a quarantine person's partner loses both lives, the quarantined person also dies.
            </p>
            <br/>
            <p style={{ fontSize: "1.1rem", lineHeight: "140%", textAlign: "left" }}>
              <p style={{textAlign: "center"}}>3.0</p>
              <br />&bull; for any group that has an individual in quarantine, the
              other member of the group will have 2 lives until the quarantined
              member is out. if the non quarantined member of the group loses a
              life before the quarantined member comes out of quarantine and
              does not/is unable to revive, then only the previously quarantined
              member will be alive.<br/>
              &bull; if you cannot physically make it to the
              ben franklin bench, you must walk up to a stranger and say “i am a
              peasant who is incapable of protecting myself from a rubber
              balloon” and have your other team member record it
            </p>
            <br/>
            <p style={{ fontSize: "1.1rem", lineHeight: "140%", textAlign: "left" }}>
            <p style={{textAlign: "center"}}>2.0</p>
              <br />
              &bull;the dead/limbo person must hold an L on their forehead in the picture for maximum clarity and humiliation
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};

export default AssassinsPage;

import * as React from "react";

import ExternalLink from "../../components/ExternalLink";

import RulesPdf from "./Assassins_Rules.pdf";

import "./style.css";

const AssassinsPage = () => {
  return (
    <html>
      <head></head>
      <body>
        <div id="assassins-page">
          <h1>signal x spark assassins</h1>

          <p>This site is still a wip! Please check back EOD</p>
          <p>
            <ExternalLink href={RulesPdf}>Game Rules &rarr;</ExternalLink>
          </p>
          <p>
            <a href="graveyard">Graveyard &rarr;</a>
          </p>
        </div>
      </body>
    </html>
  );
};

export default AssassinsPage;

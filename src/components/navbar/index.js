import React from "react";

import "../../styles/global.css";
import "./style.css";

class Navbar extends React.Component {
  render() {
    return (<div className="custom-navbar">
      <a href="/">Current Members</a>&nbsp;&nbsp;/&nbsp;&nbsp;
      <a href="/alumni">Alumni</a>&nbsp;&nbsp;/&nbsp;&nbsp;
      <a href="/directory">Directory</a>&nbsp;&nbsp;/&nbsp;&nbsp;
      <a href="https://pennspark.org/" target="_blank" rel="noopener noreferrer">About Spark</a>
    </div>);
  }
}

export default Navbar;
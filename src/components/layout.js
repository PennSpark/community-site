import React from "react";
import Footer from "./footer";
import { Helmet } from "react-helmet";

import FavIcon from "../images/favicon.png"

import "../styles/global.css"


class Layout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <Helmet>
            <title>{this.props.title}</title>
            <link rel="icon" type="image/png" href={FavIcon} />
          </Helmet>
        </head>
        <body>{this.props.children}</body>
        <Footer/>
      </html>
    );
  }
}

export default Layout;

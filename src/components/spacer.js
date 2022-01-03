import React from "react";

class Spacer extends React.Component {
  render() {
    return (
      <div style={{display: "inline-block", width: this.props.width}} />
    );
  }
}

export default Spacer;

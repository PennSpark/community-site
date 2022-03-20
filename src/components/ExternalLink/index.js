import * as React from "react";

class ExternalLink extends React.Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        {this.props.children}
      </a>
    );
  }
}

export default ExternalLink;
"use strict";

import React from "react";
import ScrollLink from "../mixins/scroll-link";

class LinkElement extends React.Component {
  render = () => (
    <a {...this.props} href={`#${this.props.to}`} onClick={this.handleClick}>
      {this.props.children}
    </a>
  );

  handleClick = e => {
    e.preventDefault();
  };
}

export default ScrollLink(LinkElement);

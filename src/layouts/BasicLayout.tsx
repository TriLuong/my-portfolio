import React, { Component, Children } from "react";

class BasicLayout extends Component {
  render() {
    const { children } = this.props;
    return <div className="position-relative w-100">{children}</div>;
  }
}

export default BasicLayout;

import React, { Component } from "react";

class Box extends Component {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <div style={{ position: "absolute", width: size, height: size, backgroundColor: "blue", left: x, top: y }} />
    );
  }
}

export { Box };
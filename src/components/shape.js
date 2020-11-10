// declare class

// export class using module.exports
import React from "react";

class Shape extends React.Component {
  constructor() {
    this.state = {
      color: "red"
    };
  }
  setColor(color) {
    this.setState({ color: color });
  }
  drawShape() {
    console.log("draw");
  }
  calculateArea() {}
  render() {
    return <h1>Shape</h1>;
  }
}
module.exports = Shape;

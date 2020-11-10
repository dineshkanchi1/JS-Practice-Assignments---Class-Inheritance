// declare class

// export class using module.exports
import React from "react";

class Shape extends React.Component {
  constructor() {
    this.color: "red";
  }
  drawShape() {
    console.log("draw");
  }
  calculateArea() {
    console.log("area");
  }
  render() {
    return <h1>Shape</h1>;
  }
}
module.exports = Shape;

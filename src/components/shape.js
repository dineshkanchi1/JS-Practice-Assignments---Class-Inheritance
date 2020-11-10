// declare class

// export class using module.exports
import React from "react";

class Shape {
  constructor() {
    this.color = "#fffff";
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

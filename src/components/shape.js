// declare class

// export class using module.exports
import React from "react";
import Circle from "./circle";

export default class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }
  drawShape() {
    console.log("shape");
  }
  calculateArea() {
    console.log("area");
  }
  render() {
    return <Circle />;
  }
}

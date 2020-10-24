// import using require

// declare class

// export class using module.exports

import Shape from "./shape";
export default class Circle extends Shape {
  constructor(props) {
    super(props);
    this.drawShape = this.drawShape.bind(this);
    this.setState({ color: "green" });
    this.calculateArea = this.calculateArea.bind(this);
  }
  calculateArea() {
    console.log("circle area");
  }
  render() {
    return <h1>Cirlce</h1>;
  }
}

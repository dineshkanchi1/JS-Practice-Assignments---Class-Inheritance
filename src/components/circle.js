// import using require

// declare class

// export class using module.exports

import Shape from "./shape";
export default class Circle extends Shape {
  calculateArea() {
    console.log("circle area");
  }
  render() {
    return <h1>Circle</h1>;
  }
}

// import using require

// declare class

// export class using module.exports

let Shape = require("./shape");
class Circle extends Shape {
  constructor(props) {
    super(props);
  }
  calculateArea() {
    console.log("circle area");
  }
  render() {
    return <h1>Circle</h1>;
  }
}
module.exports = Circle;

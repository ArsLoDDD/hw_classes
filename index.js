class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("Value must be number");
    }
    return (this._from = from);
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("Value must be number");
    }
    if (to < this.from) {
      throw new RangeError("To should be more than From");
    }
    return (this._to = to);
  }
  getRange() {
    return new Array().concat(this.from, this.to);
  }
  validator(number) {
    if (number <= this.from && number >= this.to) {
      throw new RangeError(
        "To should be more than From, and From should be less than To"
      );
    }
    return number;
  }
}
const array123 = new RangeValidator(120, 180);
console.log(array123);
/*********************************************/
class Figure3D {
  constructor(name) {
    this.name = name;
  }
  getVolume() {
    return 0;
  }
}
class Sphere extends Figure3D {
  constructor(radius) {
    super("Sphere");
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("Radius must be a number");
    }
    return (this._radius = radius);
  }
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}
class Cylinder extends Figure3D {
  constructor(radius, height) {
    super("Cylinder");
    this.radius = radius;
    this.height = height;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("Radius must be a number");
    }
    return (this._radius = radius);
  }
  get height() {
    return this._height;
  }
  set height(height) {
    if (typeof height !== "number") {
      throw new TypeError("Height must be a number");
    }
    return (this._height = height);
  }
  get baseArea() {
    return this.baseArea;
  }
  getVolume() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }
}
class Cube extends Figure3D {
  constructor(height) {
    super("Cube");
    this.height = height;
  }
  get height() {
    return this._height;
  }
  set height(height) {
    if (typeof height !== "number") {
      throw new TypeError("Height must be a number");
    }
    return (this._height = height);
  }
  getVolume() {
    return Math.pow(this.height, 3);
  }
}
const sphereTest = new Sphere(80);
console.log(sphereTest.getVolume());
const cylinderTest = new Cylinder(5, 10);
console.log(cylinderTest.getVolume());
const cubeTest = new Cube(13);
console.log(cubeTest.getVolume());
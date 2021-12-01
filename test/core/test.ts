import { Root, GameObject, Component, Vec3, Vec2 } from '../../src';

class Position extends Component {
  constructor(object: GameObject, x: number, y: number, z: number) {
    super(object);
    this.vec = new Vec3(x, y, z);
  }
  vec: Vec3;

  get x() {
    return this.vec.x;
  }
  set x(value: number) {
    this.vec.x = value;
  }
  get y() {
    return this.vec.y;
  }
  set y(value: number) {
    this.vec.y = value;
  }
  get z() {
    return this.vec.z;
  }
  set z(value: number) {
    this.vec.z = value;
  }
}

class Position2 extends Component {
  constructor(object: GameObject, x: number, y: number) {
    super(object);
    this.vec = new Vec2(x, y);
  }
  vec: Vec2;

  get x() {
    return this.vec.x;
  }
  set x(value: number) {
    this.vec.x = value;
  }
  get y() {
    return this.vec.y;
  }
  set y(value: number) {
    this.vec.y = value;
  }
}

class TestObject extends GameObject {}

const root = new Root<[Position, Position2]>();

const object = new TestObject({ root });

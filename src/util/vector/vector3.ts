import { Vec2 } from './';

export class Vec3 {
  constructor(public x: number, public y: number, public z: number) {}
  set(x: number, y: number, z: number): this {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  clone(): Vec3 {
    return new Vec3(this.x, this.y, this.z);
  }
  add(otherVec3: Vec3): this {
    this.x += otherVec3.x;
    this.y += otherVec3.y;
    this.z += otherVec3.z;
    return this;
  }
  sub(otherVec3: Vec3): this {
    this.x -= otherVec3.x;
    this.y -= otherVec3.y;
    this.z -= otherVec3.z;
    return this;
  }
  times(num: number): this {
    this.x *= num;
    this.y *= num;
    this.z *= num;
    return this;
  }
  setMagnitude(num: number): Vec3 {
    const { x, y, z, magnitude } = this;
    return magnitude === 0
      ? this
      : new Vec3(
          x / (magnitude / num),
          y / (magnitude / num),
          z / (magnitude / num)
        );
  }
  get inverse(): Vec3 {
    return this.clone().times(-1);
  }
  get magnitude(): number {
    const { x, y, z } = this;
    return Math.sqrt(x * x + y * y + z * z);
  }
  get normalized(): Vec3 {
    const { x, y, z, magnitude } = this;
    return magnitude === 0
      ? this
      : new Vec3(x / magnitude, y / magnitude, z / magnitude);
  }
  get reverseY(): Vec3 {
    this.y *= -1;
    return this;
  }
  get vec2(): Vec2 {
    return new Vec2(this.x, this.y);
  }
  static add(v1: Vec3, v2: Vec3): Vec3 {
    return v1.clone().add(v2);
  }
  static sub(v1: Vec3, v2: Vec3): Vec3 {
    return v1.clone().sub(v2);
  }
  static times(vec: Vec3, num: number): Vec3 {
    return vec.clone().times(num);
  }
  static dot(v1: Vec3, v2: Vec3): number {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }
  static cross(v1: Vec3, v2: Vec3): Vec3 {
    return new Vec3(
      v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x
    );
  }
}

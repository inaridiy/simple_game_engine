import { Vec2 } from '../';

export class Rectangle {
  constructor(public width: number, public height: number) {}

  getPointList(vec: Vec2): [number, number, number, number] {
    const { x, y } = vec;
    const { width, height } = this;
    const [hw, hh] = [width / 2, height / 2];
    return [x - hw, y - hh, x + hw, y + hh];
  }
}

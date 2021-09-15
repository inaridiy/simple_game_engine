import { IComponent } from '../../';

export class Direction implements IComponent {
  constructor(public x: number, public y: number, public z: number) {}
  type = 'direction';
  get radian(): Direction {
    const t = Math.PI / 180;
    return new Direction(this.x * t, this.y * t, this.z * t);
  }
  get degree(): Direction {
    const t = 180 / Math.PI;
    return new Direction(this.x * t, this.y * t, this.z * t);
  }
}

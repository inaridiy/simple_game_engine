import { Vec3 } from '../../../util';
import { IComponent } from '../../core';

export class Position extends Vec3 implements IComponent {
  constructor(x: number, y: number, z: number) {
    super(x, y, z);
    this.corrected = this.clone();
  }
  type = 'position';
  corrected: Vec3;
}

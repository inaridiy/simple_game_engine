import { Vec2, Vec3 } from '../../../util';
import { IComponent } from '../../core';

export class Position2D extends Vec2 implements IComponent {
  type = 'position2d';
}

export class Position3D extends Vec3 implements IComponent {
  type = 'position3d';
}

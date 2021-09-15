import { IComponent } from '../../';
import { Vec3, Vec2 } from '../../../util';

export class Velocity2D extends Vec2 implements IComponent {
  type = 'velocity2d';
}

export class Velocity3D extends Vec3 implements IComponent {
  type = 'velocity3d';
}

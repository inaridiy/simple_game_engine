import { IComponent } from '../..';
import { Rectangle } from '../../../util/shape';

export class RectangleComponent extends Rectangle implements IComponent {
  type = 'rectangle';
}

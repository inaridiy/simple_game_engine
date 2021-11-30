import { GameObject } from '.';
import { generateId } from './util/generateId';

export class Component {
  constructor(public gameObject: GameObject) {
    this.id = generateId();
    this.gameObjectId = gameObject.id;
  }
  public id: string;
  public gameObjectId: string;
  public type = 'components';
}

import { GameObject } from '.';
import { generateId } from './util/generateId';

export abstract class Component {
  constructor(public object: GameObject) {
    this.id = generateId();
  }
  public id: string;
  static type: string;
}

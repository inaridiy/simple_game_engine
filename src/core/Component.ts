import { Entity } from '.';
import { generateId } from '../util/generateId';

export class Component {
  constructor(public Entity: Entity) {
    this.id = generateId();
    this.entityId = Entity.id;
  }
  public id: string;
  public entityId: string;
  public type = 'components';
}

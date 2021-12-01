import { Component, Entity, World } from '..';

export interface EntityOption<T extends Component[] = []> {
  world: World<T>;
  parent?: Entity;
  children?: Entity[];
  tags?: string[];
}

export interface EntityDefaultEvents {
  destory: Entity;
  spawn: Entity;
  addComponent: Component;
  removeComponent: Component;
  addTag: string;
  removeTag: string;
}

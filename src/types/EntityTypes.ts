import { Component, Entity, World } from '../core';

export interface EntityOption<T extends Component[] = []> {
  world: World<T>;
  parent?: Entity;
  children?: Entity[];
  tags?: string[];
  components?: Component[];
}

export interface EntityDefaultEvents {
  destory: Entity;
  spawn: Entity;
  addComponent: Component;
  removeComponent: Component;
  addTag: string;
  removeTag: string;
}

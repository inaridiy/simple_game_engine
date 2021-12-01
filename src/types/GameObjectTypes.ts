import { Component, GameObject, Root } from '..';

export interface GameObjectOption<T extends Component[] = []> {
  root: Root<T>;
  parent?: GameObject;
  children?: GameObject[];
  tags?: string[];
}

export interface GameObjectDefaultEvents {
  destory: GameObject;
  spawn: GameObject;
  addComponent: Component;
  removeComponent: Component;
  addTag: string;
  removeTag: string;
}

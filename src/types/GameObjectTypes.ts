import { Component, GameObject, Root } from '..';

export interface GameObjectOption {
  root: Root;
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

import { GameObject, Root } from '..';
import { Event } from '../util/event';

export interface GameObjectOption {
  root: Root;
  children?: GameObject[];
  tags?: string[];
}

export interface GameObjectDefaultEvents {
  destory: GameObject;
  spawn: GameObject;
}

import { Root } from '.';
import { GameObjectOption, GameObjectDefaultEvents } from './types';
import { EventDispatcher } from './util/event';

export abstract class GameObject extends EventDispatcher<GameObjectDefaultEvents> {
  constructor({ root, children, tags }: GameObjectOption) {
    super();
    this.root = root;
    this.children = new Set(children);
    this.tags = new Set(tags);
  }
  public root: Root;
  public children: Set<GameObject>;
  public tags: Set<string>;
}

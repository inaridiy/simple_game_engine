import { Root, Component } from '.';
import { GameObjectOption, GameObjectDefaultEvents } from './types';
import { EventDispatcher, Event } from './util/event';
import { generateId } from './util/generateId';

export abstract class GameObject<
  RC extends Component[] = []
> extends EventDispatcher<GameObjectDefaultEvents, GameObject<RC>> {
  constructor({ root, children, tags, parent }: GameObjectOption<RC>) {
    super();
    this.id = generateId();
    this.root = root;
    this.parent = parent || null;
    this.children = new Set(children);
    this.tags = new Set(tags);
    this._ancestor = parent ? [...parent._ancestor, parent] : [];
  }

  public id: string;
  public root: Root;
  public parent: GameObject | null;
  public children: Set<GameObject>;
  readonly tags: Set<string>;

  private _ancestor: GameObject[] = [];

  addComponent<S extends RC[number] | Component>(component: S): void {
    this.root.components.add(component);
    this.dispatchEvent(
      'addComponent',
      new Event<Component, GameObject>(component, this)
    );
  }

  removeComponent<S extends RC[number] | Component>(component: S): void {
    this.root.components.remove(component);
    this.dispatchEvent(
      'removeComponent',
      new Event<Component, GameObject>(component, this)
    );
  }

  addTag(tag: string): void {
    this.tags.add(tag);
    this.dispatchEvent('addTag', new Event<string, GameObject>(tag, this));
  }

  removeTag(tag: string): void {
    this.tags.delete(tag);
    this.dispatchEvent('removeTag', new Event<string, GameObject>(tag, this));
  }

  addChild(object: GameObject): void {
    this.children.add(object);
    this.root.gameObjects.addGameObject(object);
  }
}

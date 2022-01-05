import { World, Component } from '.';
import { EntityOption, EntityDefaultEvents } from './types';
import { EventDispatcher, Event } from './util/event';
import { generateId } from './util/generateId';

export abstract class Entity<
  RC extends Component[] = []
> extends EventDispatcher<EntityDefaultEvents, Entity<RC>> {
  constructor({ world, children, tags, parent }: EntityOption<RC>) {
    super();
    this.id = generateId();
    this.world = world;
    this.parent = parent || null;
    this.children = new Set(children);
    this.tags = new Set(tags);
    this._ancestor = parent ? [...parent._ancestor, parent] : [];
  }

  public id: string;
  public world: World;
  public parent: Entity | null;
  public children: Set<Entity>;
  readonly tags: Set<string>;

  private _ancestor: Entity[] = [];

  addComponent<S extends RC[number] | Component>(component: S): void {
    this.world.components.add(component);
    this.dispatchEvent(
      'addComponent',
      new Event<Component, Entity>(component, this)
    );
  }

  removeComponent<S extends RC[number] | Component>(component: S): void {
    this.world.components.remove(component);
    this.dispatchEvent(
      'removeComponent',
      new Event<Component, Entity>(component, this)
    );
  }

  addTag(tag: string): void {
    this.tags.add(tag);
    this.dispatchEvent('addTag', new Event<string, Entity>(tag, this));
  }

  removeTag(tag: string): void {
    this.tags.delete(tag);
    this.dispatchEvent('removeTag', new Event<string, Entity>(tag, this));
  }

  addChild(object: Entity): void {
    this.children.add(object);
    this.world.entities.addEntity(object);
  }
}

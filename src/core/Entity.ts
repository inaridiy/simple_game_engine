import { World, Component } from '.';
import { EntityOption, EntityDefaultEvents } from '../types';
import { EventDispatcher, Event } from './event';
import { generateId } from '../util/generateId';

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
    this.components = new Set();
    this.componentTypes = new Set();
    this._ancestor = parent ? [...parent._ancestor, parent] : [];
  }

  public id: string;
  public world: World;
  public parent: Entity | null;
  public children: Set<Entity>;
  readonly tags: Set<string>;
  readonly components: Set<Component>;
  readonly componentTypes: Set<string>;

  private _ancestor: Entity[] = [];

  hasComponent<S extends RC[number]['type'] | string>(
    componentType: S
  ): boolean {
    return this.componentTypes.has(componentType);
  }

  addComponent<S extends RC[number] | Component>(component: S): void {
    this.components.add(component);
    this.componentTypes.add(component.type);
    this.dispatchEvent(
      'addComponent',
      new Event<Component, Entity>(component, this)
    );
  }

  removeComponent<S extends RC[number] | Component>(component: S): void {
    this.components.delete(component);
    this.componentTypes.delete(component.type);
    this.dispatchEvent(
      'removeComponent',
      new Event<Component, Entity>(component, this)
    );
  }

  hasTag(tag: string): boolean {
    return this.tags.has(tag);
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

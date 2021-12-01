import { World, Component } from '..';

export class ComponentManager<T extends Component[]> {
  constructor(public world: World) {
    this.components = new Map();
  }

  public components: Map<string, Set<Component>>;

  public add<S extends T[number] | Component>(component: S): void {
    if (!this.components.has(component.type)) {
      this.components.set(component.type, new Set([component]));
    } else {
      (this.components.get(component.type) as Set<Component>).add(component);
    }
  }

  public get<S extends T[number], X extends S['type'] | string>(
    componentType: X
  ): Set<S> {
    if (!this.components.has(componentType)) {
      return new Set();
    } else {
      return this.components.get(componentType) as Set<S>;
    }
  }

  public has<S extends T[number]['type'] | string>(componentType: S): boolean {
    return this.components.has(componentType);
  }

  public remove<S extends T[number] | Component>(component: S): void {
    if (this.components.has(component.type)) {
      (this.components.get(component.type) as Set<Component>).delete(component);
    }
  }
}

import { Root } from '.';
import { Component } from './Component';

export class ComponentManager {
  constructor(public root: Root, components: Component[]) {
    const mapInitialValue = components.map((component) => [
      component,
      new Set<Component>(),
    ]);
    this.Components = new Map(mapInitialValue as [Component, Set<Component>][]);
  }

  public Components: Map<Component, Set<Component>>;
}

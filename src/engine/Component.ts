import { GameObject } from './GameObject';

export abstract class Component {
  abstract type: string;
  abstract init(components: Components): void;
}

export class Components extends Map<string, Component> {
  constructor(componentsAry: Component[] = []) {
    super();
    this.addComponents(componentsAry);
  }

  addComponents(components: Component[]): void {
    components.forEach((component) => {
      this.addComponent(component);
    });
  }

  addComponent(component: Component): void {
    component.init(this);
    super.set(component.type, component);
  }
}

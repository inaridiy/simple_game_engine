import { IComponent } from '../component';

class GameObject {
  components: IComponent[] = [];
  addComponent(component: IComponent): void {
    this.components.push(component);
  }
}

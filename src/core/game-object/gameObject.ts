import { IComponent } from '../component';
import { EventDispatcher } from '../event';

export class GameObject extends EventDispatcher<GameObject> {
  components: IComponent[] = [];
  addComponent(component: IComponent): void {
    this.components.push(component);
  }
}

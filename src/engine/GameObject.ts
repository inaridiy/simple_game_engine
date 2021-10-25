import { Components } from './Component';
import { EventDispatcher } from './EventDispatcher';
import { System } from './System';
import { GameObjectArgument } from './types/GameObjectArgument';

export class GameObject {
  constructor({ components, children, systems }: GameObjectArgument) {
    this.components = new Components(components);
    this.children = new Set(children);
    this.systems = systems || [];
    this.event = new EventDispatcher();
  }

  components: Components;
  children: Set<GameObject>;
  systems: System[];
  event: EventDispatcher<typeof this.systems[number]['events']>;
}

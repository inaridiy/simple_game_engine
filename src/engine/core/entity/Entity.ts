import { IComponent } from '../component';
import { EventDispatcher } from '../event';
import { generateId } from '../../../util';

export class Entity extends EventDispatcher<Entity> {
  constructor(tags?: string[], manualId?: string) {
    super();
    this.id = manualId || generateId();
    this.tagsSet = new Set(tags);

    this.components = new Map();
  }
  id: string;
  tagsSet: Set<string>;
  components: Map<string, IComponent>;

  hasComponent(type: string): boolean {
    return this.components.has(type);
  }
  hasTag(tag: string): boolean {
    return this.components.has(tag);
  }
  get tags(): string[] {
    return Array.from(this.tagsSet);
  }
  addComponents(...components: IComponent[]): this {
    this.addComponentsByArray(components);
    return this;
  }
  addComponentsByArray(components: IComponent[]): this {
    for (let i = 0; i < components.length; i++) {
      this.components.set(components[i].type, components[i]);
    }
    return this;
  }
}

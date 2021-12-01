import { ComponentManager, EntityManager, Entity, Component } from '.';

export class World<Components extends Component[] = []> {
  constructor() {
    this.entities = new EntityManager(this);
    this.components = new ComponentManager(this);
  }

  public entities: EntityManager;
  public components: ComponentManager<Components>;

  addEntity(Entity: Entity): void {
    this.entities.addEntity(Entity);
  }
  removeEntity(Entity: Entity): void {
    this.entities.removeEntity(Entity);
  }
}

import { EntityManager, Entity, Component } from '.';

export class World<Components extends Component[] = []> {
  constructor() {
    this.entities = new EntityManager(this);
    this.currentTick = 0;
  }

  public entities: EntityManager;
  public currentTick: number;

  addEntity(Entity: Entity): void {
    this.entities.addEntity(Entity);
  }
  removeEntity(Entity: Entity): void {
    this.entities.removeEntity(Entity);
  }
  update(): void {
    this.currentTick++;
    this.entities.update();
  }
}

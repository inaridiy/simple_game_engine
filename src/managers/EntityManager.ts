import { World, Entity } from '..';

export class EntityManager {
  constructor(public world: World) {
    this.difference = new Set();
    this.Entitys = new Map();
  }
  readonly difference: Set<Entity>;
  public Entitys: Map<string, Entity>;

  addEntity(Entity: Entity): void {
    this.Entitys.set(Entity.id, Entity);
    this.difference.add(Entity);

    const changeListener = (): void => {
      this.changeEntity(Entity);
    };
    Entity.addEventListener('addTag', changeListener);
    Entity.addEventListener('removeTag', changeListener);
    Entity.addEventListener('addComponent', changeListener);
    Entity.addEventListener('removeComponent', changeListener);
  }

  changeEntity(Entity: Entity): void {
    this.difference.add(Entity);
  }

  removeEntity(Entity: Entity): void {
    for (const childObject of Entity.children) {
      this.removeEntity(childObject);
    }
    this.Entitys.delete(Entity.id);
    this.difference.add(Entity);
  }

  update(): void {
    this.difference.clear();
  }
}

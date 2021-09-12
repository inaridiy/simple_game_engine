import { EntityManager } from '../entity';
export class World {
  constructor() {
    this.entityManager = new EntityManager();
  }

  entityManager: EntityManager;
  systems: ISystem;
  updateWorld() {}
}

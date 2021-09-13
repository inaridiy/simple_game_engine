import { EntityManager } from '../entity';
import { ISystem, SystemManager } from '../system';
export class World {
  constructor() {
    this.entityManager = new EntityManager();
    this.systemManager = new SystemManager();
  }

  entityManager: EntityManager;
  systemManager: SystemManager;

  runAllSystems(): void {
    for (const system of this.systems) {
      system.update(this.entityManager);
    }
  }

  get entity(): EntityManager {
    return this.entityManager;
  }
  get system(): SystemManager {
    return this.systemManager;
  }
  get systems(): ISystem[] {
    return this.systemManager.systems;
  }
}

import { Entity } from './';

export class EntityManager {
  constructor() {
    this.entities = new Map();
  }
  entities: Map<string, Entity>;

  addEntity(entity: Entity): void {
    this.entities.set(entity.id, entity);
  }
  getEntity(id: string): Entity | null {
    return this.entities.get(id) || null;
  }
  delete(id: string): void {
    this.entities.delete(id);
  }
}

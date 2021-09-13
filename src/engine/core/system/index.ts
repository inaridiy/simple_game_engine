import { EntityManager } from '../entity';

export * from './SystemManager';
export interface ISystem {
  update(entityManager: EntityManager): void;
}

import { EntityManager } from '../entity';

export interface ISystem {
  init(entityManager: EntityManager): void;
  update(entityManager: EntityManager): void;
}

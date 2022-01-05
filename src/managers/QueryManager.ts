import { World, Entity } from '..';

export class QueryManager {
  constructor(world: World) {
    this.world = world;
  }
  private _cache: Map<string, Set<Entity>> = new Map();
  public world: World;
}

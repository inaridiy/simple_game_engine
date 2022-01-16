import { World, Entity } from '.';

export class Query {
  constructor(
    public world: World,
    public queryFunction: (entity: Entity) => boolean
  ) {
    this.entities = new Set();
    this.entitiesAry = []; //キャッシュ用
    this.lastUpdateTick = -1;
  }
  public entitiesAry: Entity[];
  public entities: Set<Entity>;
  public lastUpdateTick: number;

  run(): Entity[] {
    this._update();
    return this.entitiesAry;
  }

  private _update(): Entity[] {
    if (this.lastUpdateTick === this.world.currentTick) {
      //既に更新済みなら何もしない
      return this.entitiesAry;
    } else if (
      this.lastUpdateTick === -1 ||
      this.world.currentTick - this.lastUpdateTick - 1 >=
        this.world.entities.entities.size
    ) {
      //最初の一回目と差分が残っていないなら全て更新
      this.lastUpdateTick = this.world.currentTick;
      const [hit] = Query.runQuery(
        this.world.entities.values(),
        this.queryFunction
      );
      this.entities = new Set(hit);
      this.entitiesAry = hit;
      this.lastUpdateTick = this.world.currentTick;
      return this.entitiesAry;
    } else {
      //差分が残っているならそれをもとに更新
      for (let i = this.lastUpdateTick + 1; i <= this.world.currentTick; i++) {
        const [hit, miss] = Query.runQuery(
          this.world.entities.difference[i],
          this.queryFunction
        );
        for (let j = 0; j < hit.length; j++) {
          this.entities.add(hit[j]);
        }
        for (let j = 0; j < miss.length; j++) {
          this.entities.delete(miss[j]);
        }
      }
      this.entitiesAry = Array.from(this.entities);
      this.lastUpdateTick = this.world.currentTick;
      return this.entitiesAry;
    }
  }

  static runQuery(
    entities: Entity[],
    queryFunction: (entity: Entity) => boolean
  ): [Entity[], Entity[]] {
    const entitiesAry = Array.from(entities);
    const hit: Entity[] = [];
    const miss: Entity[] = [];
    for (let i = 0; i < entitiesAry.length; i++) {
      const entity = entitiesAry[i];
      queryFunction(entity) ? hit.push(entity) : miss.push(entity);
    }
    return [hit, miss];
  }

  static hasAllTagsQuery(...tags: string[]): (entity: Entity) => boolean {
    return (entity: Entity): boolean => {
      for (let i = 0; i < tags.length; i++) {
        if (!entity.hasTag(tags[i])) {
          return false;
        }
      }
      return true;
    };
  }
  static AnyOfTagsQuery(...tags: string[]): (entity: Entity) => boolean {
    return (entity: Entity): boolean => {
      for (let i = 0; i < tags.length; i++) {
        if (entity.hasTag(tags[i])) {
          return true;
        }
      }
      return false;
    };
  }
  static hasAllComponentQuery(
    ...componentTypes: string[]
  ): (entity: Entity) => boolean {
    return (entity: Entity): boolean => {
      for (let i = 0; i < componentTypes.length; i++) {
        if (!entity.hasComponent(componentTypes[i])) {
          return false;
        }
      }
      return true;
    };
  }
  static AnyOfComponentQuery(
    ...componentTypes: string[]
  ): (entity: Entity) => boolean {
    return (entity: Entity): boolean => {
      for (let i = 0; i < componentTypes.length; i++) {
        if (entity.hasComponent(componentTypes[i])) {
          return true;
        }
      }
      return false;
    };
  }
}

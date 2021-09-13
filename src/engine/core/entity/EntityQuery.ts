import { Entity } from './';
import { IComponent } from '../component';

type TComponents = { [s: string]: IComponent };

export class EntityQuery {
  constructor(public entitiesAry: Entity[]) {}

  include(types: string[]): EntityQuery {
    const processedAry: Entity[] = [];
    for (let i = 0; i < this.entitiesAry.length; i++) {
      let matchCnt = 0;
      for (let n = 0; n < types.length; n++) {
        if (this.entitiesAry[i].hasComponent(types[n])) {
          matchCnt++;
        }
      }
      if (matchCnt === types.length) {
        processedAry.push(this.entitiesAry[i]);
      }
    }
    return new EntityQuery(processedAry);
  }
  includeTag(tag: string | string[]): EntityQuery {
    const tagNames = Array.isArray(tag) ? tag : [tag];
    const processedAry = this.entitiesAry.filter((entity) =>
      tagNames.every((tag) => entity.hasTag(tag))
    );
    return new EntityQuery(processedAry);
  }
  get OnlyComponents(): TComponents[] {
    return this.entitiesAry.map((entity) =>
      Object.fromEntries(entity.components)
    );
  }
  get getEntities(): Entity[] {
    return this.entitiesAry;
  }
}

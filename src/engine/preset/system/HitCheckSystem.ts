import {
  ISystem,
  EntityManager,
  EntityQuery,
  RectangleComponent,
  Position,
  HitList,
  GameEvent,
} from '../..';

import boxIntersect from 'box-intersect';

export class HitCheck2D implements ISystem {
  update(entity: EntityManager): void {
    const allEntitiesAry = entity.entitiesAry;
    const entities = new EntityQuery(allEntitiesAry).include([
      'rectangle',
      'position',
    ]).getEntities;
    const idList = entities.map((entity) => entity.id);
    const boxes = entities.reduce((pre, entity) => {
      const rectangle = entity.getComponent<RectangleComponent>(
        'rectangle'
      ) as RectangleComponent;
      const position = entity.getComponent<Position>('position') as Position;
      pre.push(rectangle.getPointList(position.corrected.vec2));
      return pre;
    }, [] as [number, number, number, number][]);

    const hitList = boxIntersect(boxes);

    for (const hit of hitList) {
      const [a, b] = hit;
      const [aid, bid] = [idList[a], idList[b]];
      const [ae, be] = [entities[a], entities[b]];

      const aList = ae.getComponent<HitList>('hitList');
      if (aList) {
        aList.add(bid);
      } else {
        ae.addComponents(new HitList(['bid']));
      }
      ae.dispatchEvent('hit', new GameEvent(be));

      const bList = be.getComponent<HitList>('hitList');
      if (bList) {
        bList.add(aid);
      } else {
        be.addComponents(new HitList(['bid']));
      }
      be.dispatchEvent('hit', new GameEvent(ae));
    }
  }
}

import { World, Entity } from '.';

export class EntityManager {
  constructor(public world: World, public diffLen = 100) {
    this.difference = [];
    this.entities = new Map();
  }
  public difference: Entity[][]; //過去diffLen回分の変化を保管する
  public entities: Map<string, Entity>;

  addEntity(entity: Entity): void {
    this.entities.set(entity.id, entity);
    this.difference.slice(-1)[0].push(entity); //最後のキャッシュにエンティティを追加

    const changeListener = (): void => {
      this.changeEntity(entity);
    };

    entity.addEventListener('addTag', changeListener);
    entity.addEventListener('removeTag', changeListener);
    entity.addEventListener('addComponent', changeListener);
    entity.addEventListener('removeComponent', changeListener);
  }

  changeEntity(entity: Entity): void {
    this.difference.slice(-1)[0].push(entity);
  }

  removeEntity(entity: Entity): void {
    for (const childObject of entity.children) {
      this.removeEntity(childObject);
    }
    this.entities.delete(entity.id);
    this.difference.slice(-1)[0].push(entity);
  }

  values(): Entity[] {
    return Array.from(this.entities.values());
  }

  update(): void {
    this.difference = [...this.difference.slice(-this.diffLen), []];
  }
}

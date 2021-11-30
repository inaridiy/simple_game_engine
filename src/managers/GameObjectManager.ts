import { Root, GameObject } from '..';

export class GameObjectManager {
  constructor(public root: Root) {
    this.difference = new Set();
    this.gameObjects = new Map();
  }
  readonly difference: Set<GameObject>;
  public gameObjects: Map<string, GameObject>;

  addGameObject(gameObject: GameObject): void {
    this.gameObjects.set(gameObject.id, gameObject);
    this.difference.add(gameObject);

    const changeListener = (): void => {
      this.changeGameObject(gameObject);
    };
    gameObject.addEventListener('addTag', changeListener);
    gameObject.addEventListener('removeTag', changeListener);
    gameObject.addEventListener('addComponent', changeListener);
    gameObject.addEventListener('removeComponent', changeListener);
  }

  changeGameObject(gameObject: GameObject): void {
    this.difference.add(gameObject);
  }

  removeGameObject(gameObject: GameObject): void {
    for (const childObject of gameObject.children) {
      this.removeGameObject(childObject);
    }
    this.gameObjects.delete(gameObject.id);
    this.difference.add(gameObject);
  }

  update(): void {
    this.difference.clear();
  }
}

import { ComponentManager, GameObjectManager, GameObject, Component } from '.';

export class Root<Components extends Component[] = []> {
  constructor() {
    this.gameObjects = new GameObjectManager(this);
    this.components = new ComponentManager(this);
  }

  public gameObjects: GameObjectManager;
  public components: ComponentManager<Components>;

  addGameObject(gameObject: GameObject): void {
    this.gameObjects.addGameObject(gameObject);
  }
  removeGameObject(gameObject: GameObject): void {
    this.gameObjects.removeGameObject(gameObject);
  }
}

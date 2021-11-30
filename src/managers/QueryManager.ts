import { Root, GameObject } from '..';

export class QueryManager {
  constructor(root: Root) {
    this.root = root;
  }
  private _cache: Map<string, Set<GameObject>> = new Map();
  public root: Root;
}

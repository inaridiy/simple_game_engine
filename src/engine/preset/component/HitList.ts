import { IComponent } from '../../';

export class HitList implements IComponent {
  constructor(ids: string[] = []) {
    this._ids = new Set(ids);
  }
  type = 'hitList';
  _ids: Set<string>;

  add(id: string): void {
    this._ids.add(id);
  }
  set ids(ids: string[]) {
    this._ids = new Set(ids);
  }
  get ids(): string[] {
    return Array.from(this._ids);
  }
}

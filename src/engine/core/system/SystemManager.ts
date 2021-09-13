import { ISystem } from '.';

export class SystemManager {
  constructor() {
    this._systems = [];
  }
  private _systems: { priority: number; system: ISystem }[];
  addSystem(system: ISystem, priority = 0): void {
    this._systems.push({ priority, system });
    this._systems = this._systems.sort((a, b) => a.priority - b.priority);
  }
  get systems(): ISystem[] {
    return this._systems.map((systemData) => systemData.system);
  }
}

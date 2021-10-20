type cb<T> = (event: GameEvent<T>) => void;

export class EventDispatcher<T, S extends string = string> {
  public _eventListeners: { [t: string]: cb<T>[] } = {};

  on(type: S, callback: cb<T>): void {
    if (type in this._eventListeners) {
      this._eventListeners[type].push(callback);
    } else {
      this._eventListeners[type] = [callback];
    }
  }
  dispatchEvent(type: S, event: GameEvent<T>): void {
    const listeners = this._eventListeners[type];
    if (listeners != undefined)
      listeners.forEach((callback) => callback(event));
  }
}

type Constructor<T = {}> = new (...args: any[]) => T;

export function classDecorator<T, S extends string = string>(
  Base: Constructor
) {
  return class extends Base {
    public _eventListeners: { [t: string]: cb<T>[] } = {};

    on(type: S, callback: cb<T>): void {
      if (type in this._eventListeners) {
        this._eventListeners[type].push(callback);
      } else {
        this._eventListeners[type] = [callback];
      }
    }
    dispatchEvent(type: S, event: GameEvent<T>): void {
      const listeners = this._eventListeners[type];
      if (listeners != undefined)
        listeners.forEach((callback) => callback(event));
    }
  };
}

export class GameEvent<T> {
  constructor(public target: T) {}
}

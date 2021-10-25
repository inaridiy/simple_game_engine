import { SystemEvent } from './types/SystemEvent';

type cb<T> = (event: GameEvent<T>) => void;

export class EventDispatcher<T extends SystemEvent[]> {
  public _eventListeners: { [t in T[number][0]]?: cb<T>[] } = {};

  on(type: T[number][0], callback: cb<T[number][1]>): void {
    if (type in this._eventListeners) {
      this._eventListeners[type]?.push(callback);
    } else {
      this._eventListeners[type] = [callback];
    }
  }
  dispatchEvent(type: T[number][0], event: GameEvent<T>): void {
    const listeners = this._eventListeners[type];
    if (listeners != undefined)
      listeners.forEach((callback) => callback(event));
  }
}

export class GameEvent<T> {
  constructor(public target: T) {}
}

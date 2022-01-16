import { Event } from '.';

export type EventLitener = <T extends Event>(event: T) => void;

// eslint-disable-next-line
export class EventDispatcher<T, X = any> {
  constructor() {
    this._eventListeners = new Map();
  }
  private _eventListeners: Map<string, EventLitener[]>;

  addEventListener<S extends keyof T & string>(
    eventType: S,
    listener: (event: Event<T[S], X>) => void
  ): void {
    if (!this._eventListeners.has(eventType)) {
      this._eventListeners.set(eventType, [listener]);
    } else {
      (this._eventListeners.get(eventType) as EventLitener[]).push(listener);
    }
  }

  dispatchEvent<S extends keyof T & string>(
    eventType: S,
    event: Event<T[S], X>
  ): void {
    if (this._eventListeners.has(eventType)) {
      for (const listener of this._eventListeners.get(
        eventType
      ) as EventLitener[]) {
        listener(event);
      }
    } else {
      throw new Error(`${eventType} is not registered`);
    }
  }

  removeEventListener<S extends keyof T & string>(eventType: S): void {
    this._eventListeners.delete(eventType);
  }
}

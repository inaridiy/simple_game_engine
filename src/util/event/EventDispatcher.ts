import { Event } from '.';
import { EventLitener } from '../../types';

export class EventDispatcher<T> {
  constructor() {
    this._eventListeners = new Map();
  }
  private _eventListeners: Map<string, EventLitener[]>;

  addEventListener<S extends keyof T & string>(
    eventType: S,
    listener: (event: Event<T[S]>) => void
  ): void {
    if (!this._eventListeners.has(eventType)) {
      this._eventListeners.set(eventType, [listener]);
    } else {
      (this._eventListeners.get(eventType) as EventLitener[]).push(listener);
    }
  }

  dispatchEvent<S extends keyof T & string>(
    eventType: S,
    event: Event<T[S]>
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

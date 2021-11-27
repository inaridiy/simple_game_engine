import { Event } from '../util/event';

export interface BaseEventTypes {
  [s: string]: Event;
}

export type EventLitener = <T extends Event>(event: T) => void;

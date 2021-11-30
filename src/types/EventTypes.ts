import { Event } from '../util/event';

export interface BaseEventTypes {
  [s: string]: any;
}

export type EventLitener = <T extends Event>(event: T) => void;

import { Event } from '../util/event';

export interface BaseEventTypes {
  // eslint-disable-next-line
  [s: string]: any;
}

export type EventLitener = <T extends Event>(event: T) => void;

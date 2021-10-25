import { SystemEvent } from './types/SystemEvent';

export abstract class System {
  abstract events: SystemEvent[];
  abstract update(): void;
}

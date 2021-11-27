export abstract class Event<T = any> {
  constructor(public target: T) {}
}

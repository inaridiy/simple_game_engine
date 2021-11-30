export class Event<T = any, S = any> {
  constructor(public target: T, public from?: S) {}
}

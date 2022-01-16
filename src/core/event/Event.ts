export class Event<T = any, S = any> {
  // eslint-disable-next-line
  constructor(public target: T, public from?: S) {}
}

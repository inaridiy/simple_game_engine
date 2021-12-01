export const union = <T>(a: Set<T>, b: Set<T>): Set<T> =>
  new Set(Array.from(a).concat(Array.from(b)));

export const intersection = <T>(a: Set<T>, b: Set<T>): Set<T> =>
  new Set([...a].filter((x) => b.has(x)));

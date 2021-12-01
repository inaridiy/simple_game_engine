export const union = <T>(a: Set<T>, b: Set<T>): Set<T> =>
  new Set(Array.from(a).concat(Array.from(b)));

export const intersection = <T>(a: Set<T>, b: Set<T>): Set<T> => {
  const prossesSize = Math.max(a.size, b.size);
  if (prossesSize < 500000) {
    return new Set([...a].filter((x) => b.has(x)));
  } else {
    const _intersection: T[] = [];
    for (const x of a) {
      if (b.has(x)) {
        _intersection.push(x);
      }
    }
    return new Set(_intersection);
  }
};

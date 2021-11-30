export const setOr = <T = any>(...Sets: Set<T>[]): Set<T> => {
  const set = new Set<T>();
  for (const s of Sets) {
    for (const v of s) {
      set.add(v);
    }
  }
  return set;
};

/** Like Required but recursive */
type DeepRequired<T> = T extends Builtin
  ? NonNullable<T>
  : T extends Map<infer K, infer V>
  ? Map<DeepRequired<K>, DeepRequired<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepRequired<K>, DeepRequired<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepRequired<K>, DeepRequired<V>>
  : T extends Set<infer U>
  ? Set<DeepRequired<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepRequired<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepRequired<U>>
  : T extends Promise<infer U>
  ? Promise<DeepRequired<U>>
  : T extends Record<string, unknown>
  ? { [K in keyof T]-?: DeepRequired<T[K]> }
  : NonNullable<T>;

// // type NonNullable<T> = Exclude<T, null | undefined>;
// type DeepNonNullable<T> = {
//   [K in keyof T]-?: NonNullable<T[K]>;
// };

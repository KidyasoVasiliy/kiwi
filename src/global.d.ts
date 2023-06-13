// type DeepRequired<T> = {
//   [K in keyof T]: Required<DeepRequired<T[K]>>;
// };

// // type NonNullable<T> = Exclude<T, null | undefined>;
// type DeepNonNullable<T> = {
//   [K in keyof T]-?: NonNullable<T[K]>;
// };

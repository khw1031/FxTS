type Go1 = {
  <T, U>(a: T, f: (a: T) => U): U
  <T, U>(a: Promise<T>, f: (a: T) => U): Promise<U>
}
export const go1: Go1 = <T, U>(a: T | Promise<T>, f: (a: T) => U) =>
  a instanceof Promise ? a.then(f) : f(a)

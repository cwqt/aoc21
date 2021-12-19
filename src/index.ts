/**
 * Time how long a function takes to run.
 */
export const timed =
  <T, K>(fn: (input: T) => K) =>
  (input: T): K => {
    const start = performance.now()
    const result = fn(input)
    const end = performance.now()

    console.log(
      `result:\x1b[1m`,
      result,
      `\x1b[0min`,
      (end - start).toFixed(2),
      `ms`
    )

    return result
  }

export type Fn<T, K> = (args: T) => K

export const as = <T>(v: T) => v as T

type M<A extends any[], R> = (f: M<A, R>) => (...a: A) => R
export const Y = <A extends any[], R>(
  f: (g: (...a: A) => R) => (...a: A) => R
): ((...a: A) => R) =>
  ((m: M<A, R>) => f((...x) => m(m)(...x)))((m: M<A, R>) =>
    f((...x) => m(m)(...x))
  )

const repeat =
  (n: number) =>
  (f: (i: number) => number) =>
  (x: number): number =>
    n > 0 ? repeat(n - 1)(f)(f(x)) : x

export const times =
  (n: number) => (f: (i: number) => void) =>
    repeat(n)(i => (f(i), i + 1))(0)

/**
 * Tuple<number, 3> == [number, number, number]
 */
export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never

type _TupleOf<
  T,
  N extends number,
  R extends unknown[]
> = R["length"] extends N ? R : _TupleOf<T, N, [T, ...R]>

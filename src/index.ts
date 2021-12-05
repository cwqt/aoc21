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
  (x: number): number => {
    if (n > 0) return repeat(n - 1)(f)(f(x))
    else return x
  }

export const times =
  (n: number) => (f: (i: number) => void) =>
    repeat(n)(i => (f(i), i + 1))(0)

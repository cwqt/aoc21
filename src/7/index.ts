import { Fn } from ".."

export type Input = number[]
type Output = number

const solver: Fn<
  (v: number, i: number) => number,
  Fn<Input, Output>
> = fn => input =>
  input
    .reduce(
      (set, _, i) =>
        set.concat(
          input.reduce((acc, v) => acc + fn(v, i), 0)
        ),
      [] as number[]
    )
    .reduce((p, v) => (p < v ? p : v))

export const PartOne: Fn<Input, Output> = solver((v, i) =>
  Math.abs(v - i)
)

export const PartTwo: Fn<Input, Output> = solver(
  (v, i) => (Math.abs(v - i) * (Math.abs(v - i) + 1)) / 2
)

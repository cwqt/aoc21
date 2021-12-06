import { Fn, times } from ".."

export type Input = number[]

const solver: Fn<number, Fn<Input, number>> =
  days => input =>
    ((fish: number[]) => (
      times(days)(
        _ => (
          (fish[7] += fish[0]), fish.push(fish.shift()!)
        )
      ),
      fish
    ))(
      input.reduce(
        (acc, curr) => (acc[curr]++, acc),
        Array(9).fill(0)
      )
    ).reduce((acc, curr) => acc + curr, 0)

export const PartOne: Fn<Input, number> = solver(80)

export const PartTwo: Fn<Input, number> = solver(256)

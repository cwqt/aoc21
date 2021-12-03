import { Fn, Y } from ".."
import { pipe, product } from "../2"

const invert = (input: number[]) => input.map(v => ~(v - 1))

const msb = (input: number[]) =>
  input.map(bit => (bit >= 0 ? 1 : 0))

const lsb = pipe(invert, input =>
  input.map(bit => (bit > 0 ? 1 : 0))
)

const decimal = (input: number[]) =>
  parseInt(input.join(""), 2)

const count = (input: number[][]): number[] =>
  input.reduce(
    (m, bits) => m.map((bit, i) => bit + (bits[i] || -1)),
    input[0].map(() => 0)
  )

export const PartOne: Fn<number[][], number> = input =>
  product(
    (bits => [bits, invert(bits)].map(pipe(msb, decimal)))(
      count(input)
    )
  )

export const PartTwo: Fn<number[][], number> = input =>
  product(
    [msb, lsb]
      .map(fn =>
        Y(
          (
              r: (
                args: [
                  input: number[][],
                  transform: Fn<number[], number[]>,
                  depth?: number
                ]
              ) => number[]
            ) =>
            ([input, transform, depth = 0]) =>
              input.length == 1
                ? input[0]
                : r([
                    (common =>
                      input.filter(
                        bits => bits[depth] == common[depth]
                      ))(transform(count(input))),
                    transform,
                    ++depth,
                  ])
        )([input, fn])
      )
      .map(decimal)
  )

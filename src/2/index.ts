import { Fn } from ".."

export type Operation = [Direction, number]
type Direction = "forward" | "down" | "up"

const product = ([x, y]: number[]) => x * y

const pipe =
  <T, K, V>(f: (args: T) => K, g: (args: K) => V) =>
  (input: T) =>
    g(f(input))

const submarine =
  <T extends number[]>(
    controls: {
      [direction in Direction]: (
        position: T,
        magnitude: number
      ) => T
    },
    initial: T
  ): ((operations: Operation[]) => T) =>
  operations =>
    operations.reduce(
      (position, [direction, magnitude]) =>
        controls[direction](position, magnitude),
      initial
    )

export const PartOne: Fn<Operation[], number> = pipe(
  submarine(
    {
      down: ([x, y], v) => [x, y + v],
      up: ([x, y], v) => [x, y - v],
      forward: ([x, y], v) => [x + v, y],
    },
    [0, 0]
  ),
  product
)

export const PartTwo: Fn<Operation[], number> = pipe(
  submarine(
    {
      down: ([x, y, a], v) => [x, y, a + v],
      up: ([x, y, a], v) => [x, y, a - v],
      forward: ([x, y, a], v) => [x + v, y + a * v, a],
    },
    [0, 0, 0]
  ),
  product
)

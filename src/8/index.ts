import { Fn } from ".."

export type Input = [string[], string[]][]
export type Output = number

type Segment = "a" | "b" | "c" | "d" | "e" | "f" | "g"

const map: Record<number, Segment[]> = {
  [0]: ["a", "b", "c", "e", "f", "g"],
  [1]: ["c", "f"],
  [2]: ["a", "c", "d", "g"],
  [3]: ["a", "c", "d", "f", "g"],
  [4]: ["b", "c", "d", "f"],
  [5]: ["a", "b", "d", "f", "g"],
  [7]: ["a", "f", "c"],
  [8]: ["a", "b", "c", "d", "e", "f", "g"],
  [9]: ["a", "b", "c", "d", "f", "g"],
}

export const PartOne: Fn<Input, Output> = input => {}

export const PartTwo = () => {}

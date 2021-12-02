import { Fn } from ".."

const windows =
  (length: number) =>
  <T>(_: T, idx: number, arr: number[]): number[] =>
    Array.from({ length }).map((_, i) => arr[i + idx] || 0)

export const PartOne: Fn<number[], number> = input =>
  input.map(windows(2)).filter(([a, b]) => a < b).length

export const PartTwo: Fn<number[], number> = input =>
  input
    .map(windows(3))
    .map(window => window.reduce((sum, v) => sum + v))
    .map(windows(2))
    .filter(([a, b]) => a < b).length

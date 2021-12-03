import { readFileSync } from "fs"
import { join } from "path"
import { PartOne, PartTwo } from "."
import { timed } from ".."

describe("day 3", () => {
  const test: number[][] = [
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0],
  ]

  const input: number[][] = readFileSync(
    join(__dirname, "input.txt")
  )
    .toString()
    .split("\n")
    .map(line => line.split("").map(Number))

  it("part 1: calculate the power consumption", () => {
    expect(PartOne(test)).toEqual(198)

    const res = timed(PartOne)(input)
    expect(res).toEqual(2261546)
  })

  it("part 2: calculate the life support rating", () => {
    expect(PartTwo(test)).toEqual(230)
    const res = timed(PartTwo)(input)
    expect(res).toEqual(6775520)
  })
})

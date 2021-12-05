import { readFileSync } from "fs"
import { join } from "path"
import { Input, PartOne, PartTwo } from "."
import { timed } from ".."

describe("day 5: hydrothermal venture", () => {
  const test: Input = [
    [0, 9, 5, 9],
    [8, 0, 0, 8],
    [9, 4, 3, 4],
    [2, 2, 2, 1],
    [7, 0, 7, 4],
    [6, 4, 2, 0],
    [0, 9, 2, 9],
    [3, 4, 1, 4],
    [0, 0, 8, 8],
    [5, 5, 8, 2],
  ]

  const input: Input = readFileSync(
    join(__dirname, "input.txt")
  )
    .toString()
    .split("\n")
    .map(
      line =>
        line
          .split(" -> ")
          .map(coord => coord.split(",").flat())
          .flat()
          .map(Number) as Input[number]
    )

  it("part 1: overlapping points in horizontal & vertical", () => {
    expect(PartOne(test)).toEqual(5)

    const res = timed(PartOne)(input)
    expect(res).toEqual(4826)
  })

  it("part 2: overlapping points, diagonals included", () => {
    expect(PartTwo(test)).toEqual(12)

    const res = timed(PartTwo)(input)
    expect(res).toEqual(16793)
  })
})

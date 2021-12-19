import { readFileSync } from "fs"
import { join } from "path"
import { Input, PartOne, PartTwo } from "."
import { timed } from ".."

describe("day 9: smoke basin", () => {
  const test: Input = [
    [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
    [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
    [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
    [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
    [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
  ]

  const input = readFileSync(join(__dirname, "input.txt"))
    .toString()
    .split("\n")
    .map(row => row.split("").map(Number))

  it("part 1: risk level of lowest points ", () => {
    expect(PartOne(test)).toEqual(15)

    const res = timed(PartOne)(input)
    expect(res).toEqual(423)
  })

  it("part 2 :", () => {
    expect(PartTwo(test)).toEqual(1134)

    const res = timed(PartTwo)(input)
    expect(res).toEqual(1198704)
  })
})

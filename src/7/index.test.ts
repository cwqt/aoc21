import { readFileSync } from "fs"
import { join } from "path"
import { Input, PartOne, PartTwo } from "."
import { timed } from ".."

describe("day 7: the treachery of whales", () => {
  const test: Input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]

  const input = readFileSync(join(__dirname, "input.txt"))
    .toString()
    .split(",")
    .map(Number)

  it("part 1: aligning crabs", () => {
    expect(PartOne(test)).toEqual(37)

    const res = timed(PartOne)(input)
    expect(res).toEqual(342641)
  })

  it("part 2: aligning crabs, but with higher cost each step", () => {
    expect(PartTwo(test)).toEqual(168)

    const res = timed(PartTwo)(input)
    expect(res).toEqual(93006301)
  })
})

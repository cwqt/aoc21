import { readFileSync } from "fs"
import { join } from "path"
import { timed } from ".."
import { PartOne, PartTwo } from "."

describe("day 1: sonar sweep", () => {
  const test: number[] = [
    199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
  ]
  const input: number[] = readFileSync(
    join(__dirname, "input.txt")
  )
    .toString()
    .split("\n")
    .map(Number)

  it("part 1: how many measurements were larger than the previous", () => {
    expect(PartOne(test)).toEqual(7)

    const res = timed(PartOne)(input)
    expect(res).toEqual(1226)
  })

  it("part 2: same as part 1, but considering a sliding window of length 3", () => {
    expect(PartTwo(test)).toEqual(5)

    const res = timed(PartTwo)(input)
    expect(res).toEqual(1252)
  })
})

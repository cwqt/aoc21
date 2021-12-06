import { readFileSync } from "fs"
import { join } from "path"
import { Input, PartOne, PartTwo } from "."
import { timed } from ".."

describe("day 6: lanternfish", () => {
  const test: Input = [3, 4, 3, 1, 2]

  const input: Input = readFileSync(
    join(__dirname, "input.txt")
  )
    .toString()
    .split(",")
    .map(Number)

  it("part 1: modelling lanternfish growth rates, 80 days", () => {
    expect(PartOne(test)).toEqual(5934)

    const res = timed(PartOne)(input)
    expect(res).toEqual(386536)
  })

  it("part 2: modelling laternfish for 256 days", () => {
    const res = timed(PartTwo)(input)
    expect(res).toEqual(1732821262171)
  })
})

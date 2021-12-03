import { readFileSync } from "fs"
import { join } from "path"
import { PartOne, PartTwo } from "."
import { timed } from ".."

describe("day n", () => {
  const input = readFileSync(
    join(__dirname, "input.txt")
  ).toString()

  it("part 1: ", () => {
    // expect(PartOne(test)).toEqual()
    // const res = timed(PartOne)(input)
    // expect(res).toEqual()
  })

  it("part 2 :", () => {
    //   expect(PartTwo(test)).toEqual()
    //   const res = timed(PartTwo)(input)
    //   expect(res).toEqual()
  })
})

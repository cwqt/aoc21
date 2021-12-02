import { readFileSync } from "fs"
import { join } from "path"
import { Operation, PartOne, PartTwo } from "."
import { timed } from ".."

describe("day 2", () => {
  const test: Operation[] = [
    ["forward", 5],
    ["down", 5],
    ["forward", 8],
    ["up", 3],
    ["down", 8],
    ["forward", 2],
  ]

  const input: Operation[] = readFileSync(
    join(__dirname, "input.txt")
  )
    .toString()
    .split("\n")
    .map(v => v.split(" "))
    .map(([op, v]) => [op, Number(v)] as Operation)

  it("should calculate the product of the x & y movements of the sub", () => {
    expect(PartOne(test)).toEqual(150)
    const res = timed(PartOne)(input)

    expect(res).toEqual(1714950)
  })

  it("should calculate the product again, but using aim", () => {
    expect(PartTwo(test)).toEqual(900)
    const res = timed(PartTwo)(input)

    expect(res).toEqual(1281977850)
  })
})

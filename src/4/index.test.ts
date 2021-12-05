import { readFileSync } from "fs"
import { join } from "path"
import { Bingo, PartOne, PartTwo } from "."
import { timed } from ".."

describe("day 4: giant squid bingo", () => {
  const test: Bingo = [
    [
      7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13,
      6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1,
    ],
    [
      [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19],
      ],
      [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6],
      ],
      [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7],
      ],
    ],
  ]

  const input: Bingo = readFileSync(
    join(__dirname, "input.txt")
  )
    .toString()
    .split("\n")
    .filter(line => !!line)
    .reduce<Bingo>(
      (acc, curr, idx, arr) =>
        idx == 0
          ? [curr.split(",").map(Number), []]
          : (idx + 4) % 5 == 0
          ? [
              acc[0],
              [
                ...acc[1],
                arr.slice(idx, idx + 5).map(line =>
                  line
                    .split(" ")
                    .filter(i => !!i)
                    .map(Number)
                ),
              ] as Bingo[1],
            ]
          : acc,
      [[], []]
    )

  it("part 1: find the sum of the first winning boards unchecked numbers * the last called number ", () => {
    expect(PartOne(test)).toEqual(4512)

    const res = timed(PartOne)(input)
    expect(res).toEqual(38594)
  })

  it("part 2: same as above, but the last bingo board to be solved", () => {
    expect(PartTwo(test)).toEqual(1924)

    const res = timed(PartTwo)(input)
    expect(res).toEqual(21184)
  })
})

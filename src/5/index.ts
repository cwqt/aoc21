import { Fn, times } from ".."

export type Input = [
  x1: number,
  y1: number,
  x2: number,
  y2: number
][]

const when = <T>(...cases: [boolean, T][]) =>
  cases.find(([state]) => state == true)?.[1]

const solver: Fn<Input, number> = input =>
  input
    .reduce(
      (g, [x1, y1, x2, y2]) =>
        when(
          [
            x1 !== x2 && y1 !== y2,
            () => (
              times(Math.abs(x1 - x2) + 1)(
                i =>
                  g[y1 < y2 ? y1 + i : y1 - i][
                    x1 < x2 ? x1 + i : x1 - i
                  ]++
              ),
              g
            ),
          ],
          [
            y1 == y2,
            () => (
              times(Math.abs(x1 - x2) + 1)(
                i => g[y1][x1 < x2 ? x1 + i : x2 + i]++
              ),
              g
            ),
          ],
          [
            x1 == x2,
            () => (
              times(Math.abs(y1 - y2) + 1)(
                i => g[y1 < y2 ? y1 + i : y2 + i][x1]++
              ),
              g
            ),
          ]
        )!(),
      ((w, h) =>
        Array(h + 1)
          .fill(0)
          .map(_ => Array(w + 1).fill(0)))(
        Math.max(...input.map(a => [a[0], a[2]]).flat()),
        Math.max(...input.map(a => [a[1], a[3]]).flat())
      )
    )
    .reduce(
      (n, row) => n + row.filter(v => v >= 2).length,
      0
    )

export const PartOne: Fn<Input, number> = input =>
  solver(
    input.filter(([x1, y1, x2, y2]) => x1 == x2 || y1 == y2)
  )

export const PartTwo: Fn<Input, number> = solver

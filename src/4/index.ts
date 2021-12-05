import { Fn, Y } from ".."

type Numbers = number[]
type Board = number[][]
export type Bingo = [Numbers, ...Board[][]]

export const product = (a: number, b: number) => a * b

const match = (numbers: Numbers, elements: number[]) =>
  elements.every(element => numbers.includes(element))

const bingo = (numbers: Numbers, board: Board) =>
  board.some(
    (row, idx) =>
      match(numbers, row) ||
      match(
        numbers,
        Array.from({ length: board.length }).map(
          (_, i) => board[i][idx]
        )
      )
  )

const sum = (numbers: Numbers, board: Board): number =>
  board
    .flat()
    .filter(element => !numbers.includes(element))
    .reduce((acc, y) => acc + y, 0)

const slice = (numbers: Numbers, depth: number) =>
  numbers.slice(0, depth)

const tail = <T>(x: T[]) => x[x.length - 1]

const result = (
  numbers: Numbers,
  depth: number,
  board: Board
): number =>
  product(
    numbers[depth - 2],
    sum(slice(numbers, depth - 1), board)
  )

export const PartOne: Fn<Bingo, number> = ([
  numbers,
  boards,
]) =>
  Y(
    (r: (args: [depth: number, bingo?: Board]) => number) =>
      ([depth, board]) =>
        board
          ? result(numbers, depth, board)
          : r([
              depth + 1,
              boards.find(board =>
                bingo(slice(numbers, depth), board)
              ),
            ])
  )([0])

export const PartTwo: Fn<Bingo, number> = ([
  numbers,
  boards,
]) =>
  Y(
    (
        r: (
          args: [depth: number, winners: number[]]
        ) => number
      ) =>
      ([depth, winners]) =>
        winners.length == boards.length
          ? result(numbers, depth, boards[tail(winners)])
          : r([
              depth + 1,
              [
                ...winners,
                ...boards.reduce<number[]>(
                  (bingos, board, idx) =>
                    !winners.includes(idx) &&
                    bingo(slice(numbers, depth), board)
                      ? [...bingos, idx]
                      : bingos,
                  []
                ),
              ],
            ])
  )([0, []])

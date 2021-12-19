import { Fn, times, Tuple, Y, as } from ".."
import { pipe } from "../2"

export type Input = number[][]
export type Output = number
type Coord = [x: number, y: number]

const defined = <T>(x: T | undefined) => x !== undefined

const lowpoints = (map: Input): Coord[] =>
  ((points: Coord[]) => (
    times(map.length)(y =>
      times(map[0].length)(
        x =>
          [
            map[y - 1]?.[x],
            map[y + 1]?.[x],
            map[y][x - 1],
            map[y][x + 1],
          ]
            .filter(defined)
            .every(point => point > map[y][x]) &&
          points.push([x, y])
      )
    ),
    points
  ))([])

export const PartOne: Fn<Input, Output> = input =>
  pipe(lowpoints, points =>
    points.reduce(
      (acc, [x, y]) => (acc += input[y][x] + 1),
      0
    )
  )(input)

export const PartTwo: Fn<Input, any> = input =>
  lowpoints(input)
    .map(coord =>
      ((list: Coord[]) => (
        Y(
          (r: Fn<Coord, void>) =>
            ([nx, ny]: Coord) =>
              !(
                list.some(([x, y]) => x == nx && y == ny) ||
                input[ny][nx] == 9
              ) &&
              (list.push([nx, ny]),
              as<Coord[]>([
                [nx, ny - 1],
                [nx, ny + 1],
                [nx - 1, ny],
                [nx + 1, ny],
              ])
                .filter(([x, y]) => defined(input[y]?.[x]))
                .forEach(coord => r(coord)))
        )(coord),
        list
      ))([])
    )
    .map(points => points.length)
    .sort((a, b) => (a > b ? -1 : 1))
    .slice(0, 3)
    .reduce((acc, curr) => acc * curr, 1)

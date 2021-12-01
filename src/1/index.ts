/**
 * Returns array as a sliding window in chunks of length `len`
 * @param len
 */
const windows =
  (len: number) =>
  <T>(_: T, idx: number, arr: number[]): number[] =>
    Array.from({ length: len }).map((_, i) => arr[i + idx] || 0);

/**
 * Count the number of times a measurement increases from the previous measurement
 */
export const PartOne = (input: number[]): number =>
  input.map(windows(2)).filter(([a, b]) => a < b).length;

/**
 * Same as part one, but comparing across the last 3 values
 */
export const PartTwo = (input: number[]): number =>
  input
    .map(windows(3))
    .map((window) => window.reduce((sum, v) => sum + v))
    .map(windows(2))
    .filter(([a, b]) => a < b).length;

/**
 * Time how long a function takes to run.
 */
export const timed =
  <T, K>(fn: (input: T) => K) =>
  (input: T): K => {
    const start = performance.now();
    const result = fn(input);
    const end = performance.now();

    console.log(
      `result:\x1b[1m`,
      result,
      `\x1b[0min`,
      (end - start).toFixed(2),
      `ms`
    );

    return result;
  };

export type Fn<T, K> = (args: T) => K;

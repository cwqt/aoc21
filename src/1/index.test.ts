import { readFileSync } from "fs";
import { join } from "path";
import { timed } from "..";
import { PartOne, PartTwo } from ".";

describe("day 1", () => {
  const test: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  const input: number[] = readFileSync(join(__dirname, "input.txt"))
    .toString()
    .split("\n")
    .map(Number);

  it("should tell me how many measurements were larger than the previous", () => {
    expect(PartOne(test)).toEqual(7);
    timed(PartOne)(input);
  });

  it("should do the same, but for a sliding window of length 3", () => {
    expect(PartTwo(test)).toEqual(5);
    timed(PartTwo)(input);
  });
});

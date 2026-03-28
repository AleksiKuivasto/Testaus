import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {
  it("should split array into chunks", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
    expect(chunk(["a", "b", "c", "d"], 3)).to.deep.equal([
      ["a", "b", "c"],
      ["d"],
    ]);
  });

  it("should handle size 1", () => {
    expect(chunk(["a", "b", "c"], 1)).to.deep.equal([["a"], ["b"], ["c"]]);
  });

  it("should handle size larger than array", () => {
    expect(chunk(["a", "b"], 3)).to.deep.equal([["a", "b"]]);
  });

  it("should handle empty array", () => {
    expect(chunk([], 2)).to.deep.equal([]);
  });

  it("should handle null or undefined", () => {
    expect(chunk(null, 2)).to.deep.equal([]);
    expect(chunk(undefined, 2)).to.deep.equal([]);
  });

  it("should handle size 0 or negative", () => {
    expect(chunk(["a", "b", "c"], 0)).to.deep.equal([]);
    expect(chunk(["a", "b", "c"], -1)).to.deep.equal([]);
  });

  it("should handle non-integer size", () => {
    expect(chunk(["a", "b", "c", "d"], 2.5)).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
});

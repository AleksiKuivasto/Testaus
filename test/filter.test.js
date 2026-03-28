import { expect } from "chai";
import filter from "../src/filter.js";

describe("filter", () => {
  it("should filter array", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    expect(filter(users, ({ active }) => active)).to.deep.equal([
      { user: "barney", active: true },
    ]);
  });

  it("should handle empty array", () => {
    expect(filter([], () => true)).to.deep.equal([]);
  });

  it("should handle null", () => {
    expect(filter(null, () => true)).to.deep.equal([]);
  });
});

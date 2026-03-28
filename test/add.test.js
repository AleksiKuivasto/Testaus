import { expect } from "chai";
import add from "../src/add.js";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(6, 4)).to.equal(10);
    expect(add(1, 2)).to.equal(3);
  });

  it("should handle undefined values", () => {
    expect(add(undefined, 5)).to.equal(5);
    expect(add(5, undefined)).to.equal(5);
    expect(add(undefined, undefined)).to.equal(0);
  });

  it("should concatenate strings", () => {
    expect(add("6", "4")).to.equal("64");
    expect(add("1", 2)).to.equal("12");
  });
});

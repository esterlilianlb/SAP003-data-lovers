require("../src/data.js");

describe("handleFilters", () => {
  it("is a function", () => {
    expect(typeof functions.handleFilters).toBe("function");
  });
});

describe("filterByType", () => {
  it("is a function", () => {
    expect(typeof functions.filterByType).toBe("function");
  });

  it("returns `example`", () => {
    const mockPokemon= [{
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"
      ],
    }, {
      "name": "Ivysaur",
      "type": [
        "Grass",
        "Poison"
      ],
    }, {
      "name": "Venusaur",
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "name": "Charmander",
      "type": [
        "Fire"
      ],
    }];
    expect(functions.filterByType("Fire", mockPokemon)).toEqual([{
      "name": "Charmander",
      "type": [
        "Fire"
      ],
    }]);
  });
});
describe("orderByAlphabet", () => {
  it("is a function", () => {
    expect(typeof functions.orderByAlphabet).toBe("function");
  });

  // it("returns `example`", () => {
  //   expect(functions.orderByAlphabet()).toBe("example");
  // });
});
describe("searchBy", () => {
  it("is a function", () => {
    expect(typeof functions.searchBy).toBe("function");
  });

  // it("returns `example`", () => {
  //   expect(functions.searchBy()).toBe("example");
  // });
});
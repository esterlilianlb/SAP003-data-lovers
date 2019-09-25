require("../src/data.js");

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
const mockPokemonName= [{
  "name": "Bulbasaur",
}, {
  "name": "Ivysaur",
}, {
  "name": "Venusaur",
}, {
  "name": "Charmander",
}];

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
    expect(functions.filterByType("Fire", mockPokemon)).toEqual([{
      "name": "Charmander",
      "type": ["Fire"],
    }]);
  });
  it("returns `example`", () => {
    expect(functions.filterByType("", mockPokemon)).toEqual(mockPokemon);
  });
});

describe("orderByAlphabet", () => {
  it("is a function", () => {
    expect(typeof functions.orderByAlphabet).toBe("function");
  });

  it("returns `example`", () => {
    expect(functions.orderByAlphabet("sortAscending", mockPokemonName)).toEqual([{
      "name": "Bulbasaur", 
    }, {
      "name": "Charmander", 
    }, {
      "name": "Ivysaur", 
    }, {
      "name": "Venusaur", 
    }])
    ;
  });
  it("returns `example`", () => {
    expect(functions.orderByAlphabet("sortDescending", mockPokemonName)).toEqual([{
      "name": "Venusaur", 
    }, {
      "name": "Ivysaur", 
    }, {
      "name": "Charmander", 
    }, {
      "name": "Bulbasaur", 
    }]);
  });
});

describe("searchBy", () => {
  it("is a function", () => {
    expect(typeof functions.searchBy).toBe("function");
  });

  it("returns `example`", () => {
    expect(functions.searchBy("Charmander", mockPokemon)).toEqual([{
      "name": "Charmander",
      "type": ["Fire"],
    }]);
  });
});
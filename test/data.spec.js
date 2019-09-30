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
    expect(typeof data.handleFilters).toBe("function");
  });
});

describe("filterByType", () => {
  it("is a function", () => {
    expect(typeof data.filterByType).toBe("function");
  });

  it("returns `tipo de pokémon selecionado`", () => {
    expect(data.filterByType("Fire", mockPokemon)).toEqual([{
      "name": "Charmander",
      "type": ["Fire"],
    }]); 
  });
  it("returns `nenhum tipo é selecionado`", () => {
    expect(data.filterByType("", mockPokemon)).toEqual(mockPokemon);
  });
});

describe("orderByAlphabet", () => {
  it("is a function", () => {
    expect(typeof data.orderByAlphabet).toBe("function");
  });
  
  it("returns `nenhuma ordenação selecionada`", () => {
    expect(data.orderByAlphabet("", mockPokemonName)).toEqual(mockPokemonName)
    ;
  });

  it("returns `ordem alfabética de A-Z`", () => {
    expect(data.orderByAlphabet("sortAscending", mockPokemonName)).toEqual([{
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

  it("returns `ordem alfabética de Z-A`", () => {
    expect(data.orderByAlphabet("sortDescending", mockPokemonName)).toEqual([{
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
    expect(typeof data.searchBy).toBe("function");
  });

  it("returns `nome do pokémon pesquisado`", () => {
    expect(data.searchBy("Charmander", mockPokemon)).toEqual([{
      "name": "Charmander",
      "type": ["Fire"],
    }]);
  });
});


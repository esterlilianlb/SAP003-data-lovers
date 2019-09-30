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

const mockPokemonElements = [
  "Grass", 
  "Grass", 
  "Grass", 
  "Poison", 
  "Poison", 
  "Poison", 
  "Fire",
];

const mockPokemonElementsAmount = {
  Grass: 3,
  Poison: 3,
  Fire: 1,
};

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

describe("countedType", () => {
  it("returns the amount of pokemon type grass", () => {
    expect(data.countedType(mockPokemonElements).Grass).toEqual(3);
  });
});

describe("percentage", () => {
  it("returns the percentage of pokemon type grass", () => {
    expect(data.percentage(mockPokemonElementsAmount, mockPokemon.length).Grass).toEqual("75.00");
  });
});

/*
  describe("countedType", () => {
    it("is a function", () => {
      expect(typeof data.countedType).toEqual("");
    });

*/

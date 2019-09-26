function handleFilters() {
  const filteredPokemons = filterByType($pokemonTypes.value, pokemonList);
  const orderedPokemons = orderByAlphabet($orderByAlphabet.value, filteredPokemons);
  list(orderedPokemons);
  const searchPokemons = searchBy($search.value, orderedPokemons, pokemonList);
  list(searchPokemons);
};

function filterByType(typeToFilter, pokemonList) {
  if (typeToFilter === "") {
    return [...pokemonList];
  } else {
    const result = pokemonList.filter(pokemon => {
      return (pokemon.type.includes(typeToFilter));
    });

    return result;
  }
}

function orderByAlphabet(orderBy, orderedPokemons) {
  const result = orderedPokemons;
  if (orderBy === "") {
    return result;
  }

  if (orderBy === "sortAscending") {
    return result.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  if (orderBy === "sortDescending") {
    return result.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      } else {
        return 1; 

      }
    });
  }

} 
function searchBy(searchPokemons, orderedPokemons, pokemonList) {

  const result = orderedPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().match(searchPokemons.toLowerCase());
  });

  return result;
}

window.data={
  handleFilters,
  filterByType, orderByAlphabet,
  searchBy
};

function handleFilters() {
  const filteredPokemons = filterByType($pokemonTypes.value, pokemonList);
  const orderedPokemons = orderByAlphabet($orderByAlphabet.value, filteredPokemons);
  const searchPokemons = searchBy($search.value, orderedPokemons);
  
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
    return result.sort((a, b) => a.name < b.name ? -1 : 1);
  }
  if (orderBy === "sortDescending") {
    return result.sort((a, b) => a.name > b.name ? -1 : 1);
  }
} 

function searchBy(searchPokemons, orderedPokemons) {

  const result = orderedPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().match(searchPokemons.toLowerCase());
  });
  return result;
}

function countedType(dataElements) {
  return dataElements.reduce((allElements, type) => {
    if (type in allElements) {
      allElements[type]++;
    } else {
      allElements[type] = 1;
    }
    return allElements;
  }, {});
}

function percentage(elements, amountPokemons) {
  for (let type in elements) {
    elements[type] = ((elements[type] / amountPokemons) * 100).toFixed(2);
  }
  return elements;
} 

window.data={
  handleFilters,
  filterByType, 
  orderByAlphabet,
  searchBy,
  percentage,
  countedType,
};

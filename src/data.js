function handleFilters() {
  const filteredPokemons = filterByType($pokemonTypes.value);
  const orderedPokemons = orderByAlphabet($orderByAlphabet.value, filteredPokemons);
  list(orderedPokemons);
  const searchPokemons = searchBy($search.value, orderedPokemons);
  list(searchPokemons);
};

function filterByType(typeToFilter) {
  if (typeToFilter === "") {
    return [...pokemonList];
  } else {
    const result = pokemonList.filter(pokemon => {
      return (pokemon.type.includes(typeToFilter));
    });
    console.log(result);
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
      }
    });
  }
  if (orderBy === "sortDescending") {
    return result.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      }
    });
  }

}

function searchBy(searchPokemons, orderedPokemons) {
  const result = orderedPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().match(searchPokemons.toLowerCase());
  });
  return result;
}

function countedType() {
  const elements = allDataElements.reduce((allElements, type) => {
    if (type in allElements) {
      allElements[type]++;
    } else {
      allElements[type] = 1;
    }
    return allElements;
  }, {});

  return percentage(elements);
}

function percentage(elements) {
  for (let type in elements) {
    elements[type] = ((elements[type] / 151) * 100).toFixed(2);
  }
  return elements;
}

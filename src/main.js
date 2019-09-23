const pokemonList = POKEMON.pokemon
list(pokemonList)

const pokemonTypes = document.querySelector("#filterByType")

pokemonTypes.addEventListener("change", function(e){ 
    const filteredPokemons = filterByType(e.target.value);
    list(filteredPokemons)
  });
  
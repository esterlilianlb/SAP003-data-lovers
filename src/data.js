const pokemonList = POKEMON.pokemon
list(pokemonList)

const pokemonTypes = document.querySelector("#filterByType")

pokemonTypes.addEventListener("change", function(e){ 
  const filteredPokemons = filterByType(e.target.value);
  list(filteredPokemons)
});



function filterByType (typeToFilter) {
  const result = pokemonList.filter(pokemon => {
    return pokemon.type[0] === typeToFilter
  });
  return result
}

function list (pokemons){
  pokemons.forEach((pokemon) => {
    document.getElementById('pokemonList').innerHTML += `

    <div class="card">
  <img class="pokemon-image" src="${pokemon.img}" alt="pokemon">
  <p class="name"> ${pokemon.name}<p>
  <div class="pokemonInfo">
  <p><strong>Element:</strong>${pokemon.type}</p>
  <p><strong>Eggs:</strong> ${pokemon.egg}</p>
  <p><strong>weaknesses:</strong> ${pokemon.weaknesses}</p>
    </div>
  </div>
    `
  })
}

/*
console.log
                window.pokemon={
                  pokemon: pokemon,
                }
*/
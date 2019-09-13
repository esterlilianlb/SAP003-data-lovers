function filterByType (typeToFilter) {
  const result = pokemonList.filter(pokemon => {
    return (pokemon.type.includes(typeToFilter))});
    return result;
  
}
function list (pokemons){
  document.getElementById('pokemonList').innerHTML = ""
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
window.pokemon={
                  list: list,
                  filterByType: filterByType,
                }
*/
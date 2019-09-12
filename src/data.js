const pokemonList = POKEMON.pokemon
list(pokemonList)

/*
var elements = document.getElementById('minhaDiv'); // elemento presente desde inicio

elements.addEventListener('change', function(e){
  const pokemonsFiltrados = filtrarPorElemento(e.target.value);
  list(pokemonsFiltrados)
});

function filtrarPorElemento(valorEscolhidoParaFiltrar) {
  return valorEscolhidoParaFiltrar.filter(() => {
    //return // blablabla
  })
}
*/

function list (pokemons){
  pokemons.forEach((pokemon) => {
    document.getElementById('pokemonList').innerHTML += `
    <img src="  ${pokemon.img}"/>
    <p>Nome: ${pokemon.name}</p>
    <p>Elemento: ${pokemon.type}</p>
    <p>Ovos: ${pokemon.egg}</p>
    <p>Fraquezas: ${pokemon.weaknesses}</p>
    `
  })
}

/*
console.log
                window.pokemon={
                  pokemon: pokemon,
                }
*/
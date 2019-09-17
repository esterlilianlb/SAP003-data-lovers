const pokemonList = POKEMON.pokemon
list(pokemonList)


const $pokemonTypes = document.querySelector("#filterByType");
const $orderByAlphabet = document.querySelector("#orderByAlphabet");
const $search = document.querySelector("#search");

$orderByAlphabet.addEventListener("change", handleFilters);
$pokemonTypes.addEventListener("change", handleFilters);
$search.addEventListener("input", handleFilters);

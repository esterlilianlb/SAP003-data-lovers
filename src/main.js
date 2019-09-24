const pokemonList= POKEMON.pokemon;
listPokemonsByType();
list(pokemonList);

const $pokemonTypes = document.querySelector("#filterByType");
const $orderByAlphabet = document.querySelector("#orderByAlphabet");
const $search = document.querySelector("#search");

$orderByAlphabet.addEventListener("change", handleFilters);
$pokemonTypes.addEventListener("change", handleFilters);
$search.addEventListener("input", () => { 
  const time = setTimeout(handleFilters, 300);
  return time;  
});

function listElements(elements) {
  let elementsList = "";
  elements.forEach((actualElement) => {
    elementsList += `
      <div class="label label-${actualElement.toLowerCase()}">${actualElement.toLowerCase()}</div>
      `;
  });
  return elementsList;
}
  
function listPokemonsByType() {
  const typesPokemon = [];
  pokemonList.forEach((pokemon) => {
    pokemon.type.forEach((elementType) => {
      if (!typesPokemon.includes(elementType)) {
        document.getElementById("filterByType").innerHTML += `
      <option value="${elementType}">${elementType}</option>
      `;
        typesPokemon.push(elementType);
      }
  
    });

  });
  chartTypes(typesPokemon);
}

function chartTypes(labelList, dataList) {
  const ctx = document.getElementById("myChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labelList,
      datasets: [{
        label: "Percentage of Pokemon Types",
        backgroundColor: [
          "#9bcc50",
          "#b97fc9",
          "#fd7d24",
          "#3dc7ef",
          "#4592c4",
          "#729f3f",
          "#a4acaf",
          "#eed535",
          "#ab9842",
          "#d56723",
          "#f366b9",
          "#af9b408f",
          "#51c4e7",
          "#7b62a3",
          "#f16e57",
        ],
        borderColor: "#000000",
        data: dataList
      }]
    },

    // Configuration options go here
    options: {}
  });
}
let pokemonArr = require('./pokemon.json');


//returns an array of pokemon sorted based off their availability to be sold or traded
let sort = (sortType) => {
    let sortArr = [];
    let sortIndex = 0;

    //picks tradeable/sellable pokemon out of array and copies them into a new array to be returned
    if (sortType == "Trade") {
        pokemonArr.forEach((pokemon, i) => {
            if (pokemon.willTrade == true)  {
                sortArr[sortIndex] = pokemon;
                sortIndex++;
            }
        });
    } 
    else if (sortType == "Sale") {
        pokemonArr.forEach((pokemon, i) => {
            if (pokemon.price != null)  {
                sortArr[sortIndex] = pokemon;
                sortIndex++;
            }
        });
    }

    return sortArr;
}; 

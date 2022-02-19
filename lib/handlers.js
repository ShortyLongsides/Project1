//parses pokemon.json into array and assigns to variable
let pokemonArr = require('./pokemon.json');


let arraySort = require('./arraySorter.js');

//returns all pokemon card info in JSON
exports.cards = (req, res) => {
	res.json(pokemonArr);
};

//returns all tradeable pokemon card info in JSON
exports.trade = (req, res) => {
	res.json(arraySort.sort("Trade"));
};

//returns all sellable pokemon card info in JSON
exports.sell = (req, res) => {
	res.json(arraySort.sort("Sale"));
};

//renders pokemon card data in HTML
exports.home = (req, res) => {
	res.render('home', {pokemon : pokemonArr});
};

//returns and renders 404 status
exports.notFound = (req, res) => {
	res.status(404);
	res.render('404');
};

//returns and renders 500 status
exports.serverError = (req, res) => {
	res.status(500);
	res.render('500');
};
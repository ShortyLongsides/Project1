const express = require('express');

//reference to file containing all handler definitions
const handlers = require('./lib/handlers');

let app = express();

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));


//trade page handler
app.get('/api/cards/trade', handlers.trade);

//sell page handler
app.get('/api/cards/sell', handlers.sell);

//cards page handler
app.get('/api/cards', handlers.cards);

// homepage handler
app.get('/', handlers.home);

// 404 catch-all handler (middleware)
app.use(handlers.notFound);

// 500 error handler (middleware)
app.use(handlers.serverError);


app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});

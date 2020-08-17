// Stock Market app

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
// API pk_1ff7017646bb4db3bc790c0dfaaf9352


// use body parser middleware
app.use(bodyParser.urlencoded({extended : false}));


// create call_api function
function call_api(finishedAPI) {
     request('https://cloud.iexapis.com/stable/stock/goog/quote?token=pk_1ff7017646bb4db3bc790c0dfaaf9352',{json: true}, (err,res,body) => { 
if(err){ return console.log(err);}

if(res.statusCode == 200){
	finishedAPI(body);
     };
   });	
 };

 function call_api(finishedAPI) {
     request('https://cloud.iexapis.com/stable/stock/goog/quote?token=pk_1ff7017646bb4db3bc790c0dfaaf9352',{json: true}, (err,res,body) => { 
if(err){ return console.log(err);}

if(res.statusCode == 200){
	finishedAPI(body);
     };
   });	
 };





const PORT = process.env.PORT || 5000; 
// Set Handlebars Middleware
app.locals.layout = false;
app.engine('handlebars', exphbs ({
layoutsDir: __dirname + '/views/layouts',
}));
app.set('view engine', 'handlebars');

const otherstuff = "hello there, it is other stuff";
// Set handlebars index  routes
app.get('/', function (req, res) {
	 call_api(function(doneAPI) {
	 	 res.render('home', {
    	stock: doneAPI
    });
	 });  
});

//call_api(function, req.body.stock_ticker)
// Set handler
app.post('/', function (req, res) {
	 call_api(function(doneAPI) {
	 	 posted_stuff = req.body.stock_ticker;
	 	 res.render('home', {
    	stock: doneAPI,
    	
    });
  },req.body.stock_ticker);
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server Listening on port ' + PORT))
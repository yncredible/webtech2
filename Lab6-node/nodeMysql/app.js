
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mysql = require('mysql');

var app = express();

var database = 'node_app';
var table = 'products';

var connection = mysql.createConnection({
	user: 'root',
	password: 'root',
	host: 'localhost',
	port: 8889
	});

connection.query('USE ' +database);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);


// ADD NEW PRODUCT TO DATABASE
app.get('/products/add', function(req, res){
	res.render('product_form', {title: 'Add product'})
});

app.post('/products/add', function(req, res){
	var name = req.body.product.name;

	connection.query(
		'INSERT INTO '+table+' '+
		'SET name = ?',
		[name]
		);

	res.redirect('/products');
});


// PRINT OUT ALL PRODUCTS
app.get('/products', function(req, res){
	connection.query(
		'SELECT * FROM ' + table, function(err, results, fields) {
			if(err)
			{
				throw err;
			}
		
			res.render('products_list', {
				products: results,
				title: 'List of products'
			})
		
			}
		)
});


// app.get('/products/view/:id', function(req, res){
// 	connection.query(
// 		'SELECT * FROM ' + table + ' WHERE id = "'+ req.params.id + '"',
// 		function(err, results, fields){
// 			if(err)
// 			{
// 				throw err;
// 			}

// 			res.render('single_product', {
// 				product: results,
// 				title: results[0].name
// 			});
// 		}
// 		)
// });



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

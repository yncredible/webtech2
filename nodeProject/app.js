
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();


// MYSQL CONNECTION
// var database = 'nodeproject';
// var table = 'questions';

// var connection = mysql.createConnection({
// 	user:'root',
// 	password:'root',
// 	host:'localhost',
// 	port: 8889
// 	});

// connection.query('USE ' +database);

// connection.query(
// 	'INSERT INTO '+table+ ' '+
// 	'SET naam = ?',
// 	['Yannick']
// 	);

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

// All the pages
var askQuestions = require('./routes/ask');
var allQuestions = require('./routes/questions');
var moderator = require('./routes/moderate');

app.get('/', routes.index);
app.get('/ask', askQuestions.ask);
app.get('/questions', allQuestions.questions);
app.get('/moderate', moderator.moderate);




// Faye uitbreiding
var faye = require('faye');
var bayeux = new faye.NodeAdapter({mount: '/faye'});
var server = http.createServer(app);
bayeux.attach(server);
server.listen(app.get('port'), function(){
  	console.log('Ready and steady on port ' + app.get('port'));
});



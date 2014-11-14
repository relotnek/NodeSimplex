var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// configure app

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views')); //__dirname 
app.use(bodyParser());
app.use(express.static(path.join(__dirname + '/resources')));

// use middleware

// define routes

app.get('/', function(req,res) {
	res.send('hello express');
});

app.get('/api/user', function(req,res){
	var UserId = req.query.email;
	res.render('index', 
		{
			id: UserId
		}
	);
});

app.post('/api/user/add', function(req,res){
	var user = req.body.email;
	res.redirect('/api/user/?email=' + user);
	console.log(user)
});

app.listen(1337, function() {
	console.log('ready on port 1337');
});


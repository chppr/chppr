var express = require('express')
var webpack = require ('webpack');
var webpackDevMiddleware = require ('webpack-dev-middleware');
var config = require( './../webpack.config.js');
var compiler = webpack(config);
var passport = require('passport');
var Posts = require('./models/posts');
var Users = require('./models/users');
var logger = require('morgan');

var Path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var KnexSessionStore = require('connect-session-knex')(session);
var Knex = require('knex');
var knex = Knex({
    client: 'pg',
    connection: {
        database: 'yumsnap'
    }
});

var store = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions' // optional. Defaults to 'sessions'
});

var passportGithub = require('./auth/github');

var routes = express.Router();
var app = express();
app.use(logger('dev'));


app.use(webpackDevMiddleware(compiler, {  
    publicPath: config.output.publicPath,  
    stats: {colors: true}  
}))

var assetFolder = Path.resolve(__dirname, '../client')
app.use(express.static(assetFolder, { index: 'index.html' } ));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: 'supersecretysecret', store: store })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use('/', routes);

var port = process.env.PORT || 4000
app.listen(port)
console.log("Listening on port", port)



// ---------- Routes Start Here ------------- //

//get endpoint for json obj for posts 
routes.get('/feed', function (req, res) {
	console.log('getting feed!')

	if(req.user) {
		console.log('user is authed!');
		console.log('user = ', req.user);
	}

	Posts.loader()
	.then(function(posts){
		res.status(200).send(posts);
	})
	.catch(function (err) {
				console.log('Error getting posts: ', err);
				return res.status(404).send(err);
	})
})

//get endpoint to serve up index.html
routes.get('/dashboard', function (req, res) {
	res.sendFile(assetFolder + '/index.html')
})

//post endpoint for user feed
routes.post('/feed', function(req, res) {
	var card = req.body;

	Posts.create(card)
	.then(function(post){
		res.status(201).send(post);
	})
	.catch(function (err) {
		console.log('Error creating new post: ', err);
		return res.status(404).send(err);
	})
})


routes.delete('/delete', function(req, res) {
	Posts.delete(req.body)
		.then(function(){
			res.status(204).send()
		})
		.catch(function(err){
			console.log('failed to delete card')
			return res.status(404).send(err)
		})
})


routes.post('/upload', function (req, res) {
	var file = req.body;
  console.log("req body:", file);
  var path = "./client/pictures/test4.jpg"
  fs.writeFile(path, file.preview, function(err) {
    if (err) {throw err};
    console.log('No errors!');
  })
})

// endpoint thats only used to update categories table
routes.post('/categories', function(req, res) {
	var cats = req.body;

	Users.categories(cats)
	.then(function(cat){
		res.status(201).send(cats);
	})
	.catch(function (err) {
				console.log('Error creating new post: ', err);
				return res.status(404).send(err);
			})
})


routes.get('/auth/github', passportGithub.authenticate('github', { scope: [ 'user:email' ] }));

routes.get('/auth/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/auth/github', successRedirect: '/' }))



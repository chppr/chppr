//var browserify = require('browserify-middleware')
var express = require('express');
var webpack = require ('webpack');
var webpackDevMiddleware = require ('webpack-dev-middleware');
//var webpackHotMiddleware = require ('webpack-hot-middleware')
var config = require( './../webpack.config.js');
var compiler = webpack(config);

var multer = require('multer');
var upload = multer({ dest: './client/pictures'});

var Path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');
var flash    = require('connect-flash'); // messages stored in session
var getInfo = require('./config/passport');

var Posts = require('./models/posts');
var Users = require('./models/users');

var routes = express.Router();
var app = express();


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));

//app.use(webpackHotMiddleware(compiler, {
//    log: console.log
//}))
// Parse incoming request bodies as JSON
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Mount our main router
app.use('/', routes);




// ---------- Routes Start Here ------------- //


//Login route, default route
routes.get('/', function(req, res) {
	res.sendFile(assetFolder + '/login.html');
});


//get endpoint for json obj for posts
routes.get('/feed', function (req, res) {
	Posts.loader()
	.then(function(posts){
		res.status(201).send(posts);
	})
	.catch(function (err) {
				console.log('Error getting posts: ', err);
				return res.status(404).send(err);
	});
});

//get endpoint to serve up index.html
routes.get('/dashboard', function (req, res) {
	res.sendFile(assetFolder + '/index.html');
});

routes.get('/pictures/');

//post endpoint for user feed
routes.post('/feed', function(req, res) {
	var card = req.body;
	console.log("REQ BODY:", req.body);
	Posts.create(card)
	.then(function(post){
		res.status(201).send(post);
	})
	.catch(function (err) {
				console.log('Error creating new post: ', err);
				return res.status(404).send(err);
			});
});

//upload a file
routes.post('/upload', upload.single('photo'), function(req, res, next){
	res.end(req.file.filename);
});

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
			});
});

app.get('/auth/facebook', passport.authenticate('facebook'), function(req,res){
	console.log("got to auth/facebook");
});

app.get('/auth/noAuth', function(req,res){
	res.cookie("loggedIn","false");
	res.redirect('/dashboard');
});

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  function(req, res) {
  	console.log("got to callback");
  	var info = getInfo();

 console.log(typeof info.pic)
  	res.cookie("profilePic", info.pic)
  	res.cookie("profileName", info.name)

    // Successful authentication, redirect home.
    res.clearCookie('loggedIn');
    res.redirect('/dashboard');
  });

// Static assets (html, etc.)
var assetFolder = Path.resolve(__dirname, '../client');
routes.use(express.static(assetFolder));

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port", port);

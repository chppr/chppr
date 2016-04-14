var flash = require('connect-flash');
var express = require('express');
var router = express.Router();


// This is how it was hooked up originally - if it helps while we migrate to react style

module.exports = function (app, passport){
	// get homepage
	app.get('/', function(req, res){
		res.render('index.ejs');
	});

	// show login form
	// app.get('/login', function(req, res){
	// 	// render page and pass in any flash data i(f there is any)
	// 	res.render('login.ejs', {message: req.flash('loginMessage') });
	// });

	// // route for logging out
 //  app.get('/logout', function(req, res) {
 //    req.logout();
 //    res.redirect('/');
 //  });

	// show sign up form
	app.get('/signup', function(req, res) {
		//render page, pass in any flash data (if there is any)
		res.render('signup.ejs', {message: req.flash('signupMessage') });
	});

	// PROFILE SECTION
	// show profile page
	// this is the pass protected stuff, in yum snap it'll be the main page?
	// route to middleware to verify this (w/ isLoggedIn fn)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user: req.user //get user out of session pass to template
		});
	});

  // send to facebook for authentication
  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  app.get('/auth/instagram', passport.authenticate('instagram'));

  app.get('/auth/instagram/callback',
    passport.authenticate('instagram', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

 return router;
}


// route to middleware to make sure user is logged in
function isLoggedIn(req, res, next) {

	// if user is logged in -
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to home
	res.redirect('/');
}




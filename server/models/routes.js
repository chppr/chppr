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
	app.get('/login', function(req, res){
		// render page and pass in any flash data i(f there is any)
		res.render('login.ejs', {message: req.flash('loginMessage') });
	});

	// route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

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
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' })); // to get email from facebook

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

	 // route for twitter authentication and login
    app.get('/auth/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

 return router; //? need ?
}


// route to middleware to make sure user is logged in
function isLoggedIn(req, res, next) {

	// if user is logged in - 
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to home
	res.redirect('/');
}




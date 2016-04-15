var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/users');
var config = require('./config');
var init = require('./init');


// LOCAL LOGIN  =============================================================

 passport.use('local-login', new LocalStrategy({
     usernameField: 'username',
     passwordField: 'password'
   }, function(accessToken, refreshToken, profile, done) {

   console.log('local login!!!');

   done(null, { name:'Harry' });

 }));

 // LOCAL SIGNUP  ============================================================
 passport.use('local-signup', new LocalStrategy({
     usernameField: 'username',
     passwordField: 'password'
   }, function(req, accessToken, refreshToken, profile, done) {

   console.log('signing in!');

   done(null, { name:'Harry' });



   }));



// serialize user into the session
init();

module.exports = passport;

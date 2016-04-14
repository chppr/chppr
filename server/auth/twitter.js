var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

var User = require('../models/users');
var config = require('./config');
var init = require('./init');


passport.use(new TwitterStrategy({
    consumerKey: config.twitter.consumerKey,
    consumerSecret: config.twitter.consumerSecret,
    callbackURL: config.twitter.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {

    
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    
    });

  }
));

// serialize user into the session
init();


module.exports = passport;
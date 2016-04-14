var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;

var User = require('../models/users');
var config = require('./config');
var init = require('./init');


passport.use(new GitHubStrategy({
    clientID: config.github.clientID,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {

    User.verifyInsert(profile.displayName, profile.id).then(function(user) {
        // console.log('inserted vi = ', user);
        return done(null, user);
      })
      .catch(function(err) {
        // console.log('vi prom err', err);
        return done(null, err);
      });

  }));

// serialize user into the session
init();

module.exports = passport;


// function(err, user) {
//       if(err) {
//         console.log('users ins ver err = ', err);
//         return done(err);
//       } else {
//         console.log('done = ', user)
//         return done(null, user);
//       }

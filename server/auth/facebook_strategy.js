
var passport = require('passport'), 
    facebook = require('passport-facebook');

// first create an app on facebook developers
// https://developers.facebook.com/

// REQ'd ON FRONT END
// <a href="/auth/facebook">Login with Facebook</a>


var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
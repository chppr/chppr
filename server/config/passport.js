var passport = require('passport');
var FacebookStrategy  = require('passport-facebook').Strategy;
var InstagramStrategy = require('passport-instagram').Strategy;
var TwitterStrategy   = require('passport-twitter').Strategy;
var authKeys = require('./auth');

var profileInfo = {}

var thisUser;
var FacebookStrategy  = require('passport-facebook').Strategy;
passport.serializeUser(function(user, done) {
  return done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  return done(null, thisUser);
});

passport.use(new FacebookStrategy({
    clientID: authKeys.facebookClient,
    clientSecret: authKeys.facebookSecret,
    callbackURL: "http://localhost:4000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'picture.type(large)']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("in construction:", profile.photos[0].value, profile.displayName);
    profileInfo.pic = profile.photos[0].value;
    profileInfo.name = profile.displayName;
    thisUser = profile;
    thisUser.id = 1;
    return done(null, thisUser);
  }
));

module.exports = function get () {
    return profileInfo;
  }

// passport.use(new TwitterStrategy({
//     consumerKey: TWITTER_CONSUMER_KEY,
//     consumerSecret: TWITTER_CONSUMER_SECRET,
//     callbackURL: "http://localhost:4000/auth/twitter/callback"
//   },
//   function(accessToken, tokenSecret, profile, done) {
//     console.log("in construction:", arguments);
//     User.findOrCreate({ twitterId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

// passport.use(new InstagramStrategy({
//     clientID: INSTAGRAM_CLIENT_ID,
//     clientSecret: INSTAGRAM_CLIENT_SECRET,
//     callbackURL: "http://localhost:4000/auth/instagram/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     console.log("in construction:", arguments);
//     User.findOrCreate({ instagramId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

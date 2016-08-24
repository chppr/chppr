var passport = require('passport');
var FacebookStrategy  = require('passport-facebook').Strategy;
var InstagramStrategy = require('passport-instagram').Strategy;
var TwitterStrategy   = require('passport-twitter').Strategy;


if (!process.env.NODE_ENV !== 'production'){
  var authKeys = require('./auth');
}

var FacebookID = process.env.FACEBOOK_ID || authKeys.facebookClient;
var FacebookSecret = process.env.FACEBOOK_SECRET || authKeys.facebookSecret;
var TwitterID = process.env.TWITTER_ID || authkeys.twitterClient;
var TwitterSecret = process.env.TWITTER_SECRET || authKeys.twitterSecret;

var fbProfileInfo = {}
var twitProfileInfo = {}
var thisUser;
var FacebookStrategy  = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
  return done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  return done(null, thisUser);
});

passport.use(new FacebookStrategy({
    clientID: FacebookID,
    clientSecret: FacebookSecret,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'picture.type(large)']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("in construction:", profile.photos[0].value, profile.displayName);
    fbProfileInfo.pic = profile.photos[0].value;
    fbProfileInfo.name = profile.displayName;
    thisUser = profile;
    thisUser.id = 1;
    return done(null, thisUser);
  }
));

module.exports = function get () {
    return [fbProfileInfo, twitProfileInfo];

  }

passport.use(new TwitterStrategy({
    consumerKey: TwitterID,
    consumerSecret: TwitterSecret,
    callbackURL: '/auth/twitter/callback'
  },
  function(accessToken, tokenSecret, profile, done) {
    console.log("in construction:", arguments);
    twitProfileInfo.pic = profile.photos[0].value;
    twitProfileInfo.name = profile.displayName;
    thisUser = profile;
    thisUser.id =1;
    // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    return done(null, thisUser);
    }
  ));

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

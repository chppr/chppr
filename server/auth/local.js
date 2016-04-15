var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/users');
var config = require('./config');
var init = require('./init');


// LOCAL LOGIN  =============================================================

  passport.use('local-login', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us  to pass in the req from our route (lets us check if a user is logged in or not)
    },

  function(accessToken, refreshToken, profile, done) {

    User.verifyInsert(profile).then(function(obj) {
        console.log('inserted vi local = ', obj);
        var send = {
          user: obj.user,
          passid: obj.passid
        };

        return done(null, send);
      })
      .catch(function(err) {
        console.log('vi prom err = ', err);
        return done(null, err);
      });

  }));

  // LOCAL SIGNUP  ============================================================
  passport.use('local-signup', new LocalStrategy({
      // by default, local strategy uses  username and password, we will override with email
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us  to pass in the req from our route (lets us check if a user is logged in or  not)
    },
  function(req, accessToken, refreshToken, profile, done) {


      // asynchronous
      process.nextTick(function() {

        //  Whether we're signing up or connecting an  account, we'll need
        //  to know if the email address is in use.
        User.findOne({
          'local.username': username
        }, function(err, existingUser) {

          // if there are any errors,  return the error
          if (err)
            return done(err);

          // check to see if there's  already a user with that email
          if (existingUser)
            return done(null, false,
             console.log('That email is already taken.'));
              // req.flash('signupMessage', 'That email is already taken.'));

          //    If we're logged in, we're connecting a new local account.
          if (req.user) {
            var user = req.user;
            user.local.username = username;
            user.local.password = user.generateHash(password);
            user.save(function(err) {
              if (err)
                throw err;
              return done(null, user);
            });
          }
          //  We're not logged in, so we're creating a  brand new user.
          else {
            // create the user
            var newUser = new User();

            newUser.local.username = username;
            newUser.local.password = newUser.generateHash(password);

            newUser.save(function(err) {
              if (err)
                throw err;

              return done(null, newUser);
            });
          }

        });
      });

    }));



// serialize user into the session
init();

module.exports = passport;

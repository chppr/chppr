var passport = require('passport');
var User = require('../models/users');


module.exports = function() {

  passport.serializeUser(function(user, done) {
    // console.log('serializeUser = ', user.gitid);
    done(null, user.gitid);
  });

  passport.deserializeUser(function(id, done) {
    // console.log('deserializeUser! now! id = ', id)
    User.verifyId(id).then(function(data) {
        console.log('verifyId got = ', data[0].gitid);
        done(null, data[0].gitid);
      })
      .catch(function(err) {
        console.log('verifyId err = ', err);
        done(err);
      });
  });

};

var passport = require('passport');


// AUTHENTICATE

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
 	 // if auth fails, passport responds w/ 401 unauth user by default

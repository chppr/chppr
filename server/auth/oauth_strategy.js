var passport = require('passport'),
	Oauth2Strategy = require('passport-oauth').Oauth2Strategy,

// REQ'd ON FRONT END
// <a href="/auth/provider">Log In with OAuth Provider</a>

// ? 
// for express app = passport.initialize() reqd' to initialize passport 

// AUTHENTICATE

passport.use('provider', new OAuth2Strategy({
    authorizationURL: 'https://www.provider.com/oauth2/authorize',
    tokenURL: 'https://www.provider.com/oauth2/token',
    clientID: '123-456-789',
    clientSecret: 'shhh-its-a-secret'
    callbackURL: 'https://www.example.com/auth/provider/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      done(err, user);
    });
  }
));

// multi scope access - check provider access
app.get('/auth/provider',
  passport.authenticate('provider', { scope: ['email', 'sms'] })
);
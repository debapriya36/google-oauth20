const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const clientID=process.env.clientID;
const clientSecret=process.env.clientSecret;
passport.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: "http://localhost:5000/og/cb"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log({
        accessToken,
        refreshToken,
        profile
    });
    return done(null,profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


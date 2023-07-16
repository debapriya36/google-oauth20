# google-oauth20

## express-session: To save information from google in session and use it on the success page
## passport: Social Authentication package for Node.js
## passport-google-oauth20: Google authentication module by Passport.js

### i. passport.use(new GoogleStrategy({…}) : This configures Passport to use the Google OAuth 2.0 authentication strategy.
### ii. function(request, accessToken, refreshToken, profile, done) { … }: This is the callback function that gets executed when a user is successfully authenticated.
### iii. passport.serializeUser(function(user, done) { … }): This function is used to serialize the user object into a session. In this case, the entire user object is serialized. The serialized user object is then stored in the session.
### iv. passport.deserializeUser(function(user, done) { … }): This function is used to deserialize the user object from the session. It retrieves the serialized user object from the session and passes it to the done callback.

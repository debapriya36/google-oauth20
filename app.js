const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
require('./passport.oauth');
require('dotenv').config();
const PORT = 5000 || process.env.PORT;

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET 
  }));
app.use(passport.initialize());
app.use(passport.session());

const isLogIn = (req,res,next)=>{
    if(req.user){
        next();
    } else {
        res.redirect("/failed");
    }
}

app.get('/', (req, res) => {
    res.send('Hello google oauth20');
});

app.get('/og',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

app.get('/og/cb',
    passport.authenticate('google', {
        failureRedirect: '/failed'
    }), (req, res) => {
        res.redirect('/success');
    }
);

app.get('/success', isLogIn, (req, res) => {
    res.send(req.user);
});

app.get('/failed', (req, res) => {
    res.send('You failed to login');
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
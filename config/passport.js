const passport = require("passport");
const User = require('../models/user');
const LocalStrategy = require('passport-local');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => { 
    User.findById(id, (err, done) => {
        done(err, user);
    })
})


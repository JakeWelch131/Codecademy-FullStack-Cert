const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const helper = require("../helpers/helper");

// Set up the Passport strategy:
passport.use(new LocalStrategy( async function (username, password, done) {
  helper.findByUsername(username, function (err, user) {
    const matchedPassword = bcrypt.compare(password, user.password);
    if (err) return done(err, false);
    if (!user) return done(null, false);
    if (!user.password == matchedPassword) return (null, false);
    done(null, user);
  })
})
);
// Serialize a user
passport.serializeUser((user, done) => {
  done(null, user.id);
})
// Deserialize a user
passport.deserializeUser((id, done) => {
  helper.findById(id, function (err, done) {
    if (err) return done(err);
    done(null, user);
  })
})

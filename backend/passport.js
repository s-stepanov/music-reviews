const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('./config/config');
const { User } = require('./models');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(new GoogleStrategy({
    clientID: config.get('GOOGLE_CLIENT_ID'),
    clientSecret: config.get('GOOGLE_CLIENT_SECRET'),
    callbackURL: `${config.get('HOST')}/api/auth/google/callback`
  },
  async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOne({ googleId: profile.id });
    if (user) {
      return done(null, user);
    }
    try {
      const user = await User.create({
        email: profile.emails[0].value,
        name: profile.displayName,
        googleId: profile.id,
        photo: profile.photos[0].value
      });
      return done(null, user);
    } catch (e) {
      return done(e, user);
    }
  }
));

module.exports = passport;
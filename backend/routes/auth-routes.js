const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const passport = require('../passport');
const config = require('../config/config');
const { UsersController } = require('../controllers');

router.get('/auth/google', passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read',
  ]
}));
router.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
  }),
  ctx => {
    ctx.redirect(`${config.get('HOST')}`)
  }
);
router.get('/auth/logout', UsersController.logout);

module.exports = router.routes();

const Router = require('koa-router');
const { UsersController } = require('../controllers');
const router = new Router({ prefix: '/api' });
const requireLogin = require('../middleware/require-login');

router.get('/users/current', requireLogin, UsersController.getCurrentUser);

module.exports = router.routes();
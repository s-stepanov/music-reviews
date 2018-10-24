const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const { ReviewsController } = require('../controllers');

router.post('/reviews', ReviewsController.createReview);

module.exports = router.routes();
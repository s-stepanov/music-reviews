const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const { ReviewsController } = require('../controllers');

router.post('/reviews', ReviewsController.createReview);
router.get('/reviews/:mbid', ReviewsController.getReviewsForAlbum);

module.exports = router.routes();
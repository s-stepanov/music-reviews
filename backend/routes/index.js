const Router = require('koa-router');
const router = new Router();

const artistsRoutes = require('./artists-routes');
const albumsRoutes = require('./albums-routes');
const reviewsRoutes = require('./reviews-routes');

router.use(artistsRoutes);
router.use(albumsRoutes);
router.use(reviewsRoutes);

module.exports = router.routes();

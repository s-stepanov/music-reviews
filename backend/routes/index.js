const Router = require('koa-router');
const router = new Router();
const serve = require('koa2-static-middleware');

const artistsRoutes = require('./artists-routes');
const albumsRoutes = require('./albums-routes');
const reviewsRoutes = require('./reviews-routes');
const authRoutes = require('./auth-routes');
const usersRoutes = require('./users-routes');

router.use(artistsRoutes);
router.use(albumsRoutes);
router.use(reviewsRoutes);
router.use(authRoutes);
router.use(usersRoutes);

router.get('/artists/dist/*', serve('public/dist'));
router.get('/albums/dist/*', serve('public/dist'));
router.get('/dist/*', serve('public/dist'));

module.exports = router.routes();

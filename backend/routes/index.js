const Router = require('koa-router');
const router = new Router();
const serve = require('koa2-static-middleware');
const send = require('koa-send');

const artistsRoutes = require('./artists-routes');
const albumsRoutes = require('./albums-routes');
const reviewsRoutes = require('./reviews-routes');

router.use(artistsRoutes);
router.use(albumsRoutes);
router.use(reviewsRoutes);

router.get('/dist/*', serve('public/dist'));
router.get('/public/img/*', serve('public/img'));
router.get('/*', ctx => send(ctx, 'public/index.html'));

module.exports = router.routes();

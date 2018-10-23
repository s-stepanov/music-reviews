const Router = require('koa-router');
const router = new Router();

const artistsRoutes = require('./artists-routes');
const albumsRoutes = require('./albums-routes');

router.use(artistsRoutes);
router.use(albumsRoutes);

module.exports = router.routes();

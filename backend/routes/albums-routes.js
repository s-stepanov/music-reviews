const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const { AlbumsController } = require('../controllers');
const requireLogin = require('../middleware/require-login');

router.get('/album/:mbid', requireLogin, AlbumsController.getAlbumInfoByMbid);
router.get('/albums/top', AlbumsController.getTopRatedAlbums);

module.exports = router.routes();

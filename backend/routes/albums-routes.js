const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const { AlbumsController } = require('../controllers');

router.get('/album/:mbid', AlbumsController.getAlbumInfoByMbid);

module.exports = router.routes();

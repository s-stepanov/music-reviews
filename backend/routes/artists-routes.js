const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const { ArtistsController } = require('../controllers');
const requireLogin = require('../middleware/require-login');

router.get('/artist', requireLogin, ArtistsController.searchArtist);
router.get('/artist/:mbid', requireLogin, ArtistsController.getArtistInfoByMbid);

module.exports = router.routes();
const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const { ArtistsController } = require('../controllers');

router.get('/artist', ArtistsController.searchArtist);
router.get('/artist/:mbid', ArtistsController.getArtistInfoByMbid);

module.exports = router.routes();
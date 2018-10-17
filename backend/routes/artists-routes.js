'use strict';
const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const { ArtistsController } = require('../controllers');

router.get('/artist', ArtistsController.searchArtist);

module.exports = router.routes();
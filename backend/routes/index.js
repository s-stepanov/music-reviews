'use strict';
const Router = require('koa-router');
const router = new Router();

const artistsRoutes = require('./artists-routes');

router.use(artistsRoutes);

module.exports = router.routes();

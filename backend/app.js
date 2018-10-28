const Koa = require('koa');
const app = new Koa();
const config = require('./config/config');
const bodyParser = require('koa-body');
const MongooseSessionStore = require('koa-session-mongoose');
const session = require('koa-session');
const mount = require('koa-mount');
const send = require('koa-send');
app.keys = ['key'];

let init = async () => {
  const database = require('./models');
  const mongoose = await database.connect();

  const store = new MongooseSessionStore({
    connection: mongoose
  });
  app.use(session({
    store: store
  }, app));

  const passport = require('./passport');
  app.use(passport.initialize());
  app.use(passport.session());

  const routes = require('./routes');

  app.use(bodyParser({
    urlencoded: true,
    multipart: true,
  }));

  app.use(routes);

  app.use(mount('/', require('koa-static')('public')));
  app.use(async (ctx) => {
    await send(ctx, 'public/index.html');
  });
};

init()
  .then(() => app.listen(config.get('API_PORT')))
  .then(console.log(`Server started on ${config.get('API_PORT')} port`));

const Koa = require('koa');
const app = new Koa();
const routes = require('./routes');
const config = require('./config/config');
const bodyParser = require('koa-body');



let init = async () => {
  const database = require('./models');
  await database.connect();

  app.use(bodyParser({
    urlencoded: true,
    multipart: true,
  }));

  app.use(routes);
};

init()
  .then(() => app.listen(config.get('API_PORT')))
  .then(console.log(`Server started on ${config.get('API_PORT')} port`));

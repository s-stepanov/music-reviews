const Koa = require('koa');
const app = new Koa();
const routes = require('./routes');
const config = require('./config/config');

app.use(routes);

Promise.resolve(app.listen(config.get('API_PORT')))
       .then(console.log(`Server started on ${config.get('API_PORT')} port`));

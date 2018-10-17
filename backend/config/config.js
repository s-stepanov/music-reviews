'use strict';

const nconf = require('nconf');
const path = require('path');
let configFile = 'development.json';

if (process.env.NODE_ENV === 'production') {
  configFile = 'production.json';
}

nconf.env();
nconf.argv();
nconf.file({ file: path.join(__dirname, configFile) });

module.exports = nconf;

const path = require('path');
const environment = process.env.NODE_ENV || 'development';
const env = require(`./env/${environment}.js`);

module.exports = {
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  env: {}
};

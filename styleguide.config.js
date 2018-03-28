const path = require('path');
module.exports = {
  webpackConfig: require('./config/webpack.config.dev'),
  require: [path.join(__dirname, 'src/index.css')],
};

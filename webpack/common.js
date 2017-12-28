const { root } = require('./helpers');

module.exports = {
    entry: root('./src/app.ts'),
    output: {
      filename: 'server.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
  };

import express from 'express';
import compression from 'compression';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

import config from '../client/utils/env_variable';
import renderer from './renderer';
import storeServer from './store';

const app = express();

if (config.MODE === 'development') {
  const webpackConfig = require('../../webpack/dev/webpack.dev.client.js');
  const compiler = webpack(webpackConfig);

  app.use(
    WebpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      serverSideRender: true,
    }),
  );

  app.use(WebpackHotMiddleware(compiler));
}

// Gzip
app.use(compression());
app.use(express.static('build'));

app.get('*', (req, res) => {
  try {
    const store = storeServer();
    res.send(renderer(req, store));
  } catch (err) {
    console.log('error in rendering server side:', err);
  }
});

app.listen(config.PORT, () => {
  console.log(`------------ Listening on port ${config.PORT} ----------------`);
});

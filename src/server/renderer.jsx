/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components';

import getHtml from './html/html';
import Website from '../client/layout/Website/Website';

export default (req, store) => {
  const sheet = new ServerStyleSheet();
  const loadableJson = path.resolve(__dirname, './loadable-stats.json');

  const extractor = new ChunkExtractor({
    statsFile: loadableJson,
    entrypoints: ['client'],
  });

  const content = renderToString(
    sheet.collectStyles(
      <ChunkExtractorManager extractor={extractor}>
        <Provider store={store}>
          <StaticRouter location={req.path}>
            <Website />
          </StaticRouter>
        </Provider>
      </ChunkExtractorManager>,
    ),
  );

  const styles = sheet.getStyleTags();

  const htmlData = {
    styles,
    children: content,
    extractor,
    store,
  };

  const html = getHtml(htmlData);

  return html;
};

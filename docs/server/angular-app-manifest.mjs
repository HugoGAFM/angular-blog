
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/content"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1063, hash: '6e95d14a76001c8da4bb16512340c43faaa317492bc83e177f9ff89e62a5c81d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: 'f729e56678edaeeaee72d38346128a5f6b911229fa9df50b2ab0815a8386552b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5207, hash: 'f5b9dd063673747bdb77e0dc1526d90f41cc3aacf309aff61f5333a9d3465ea8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'content/index.html': {size: 2144, hash: '6da3569af219008e7394478a414af370ab3dc6eb9cd34cd89dd76f8555b494b0', text: () => import('./assets-chunks/content_index_html.mjs').then(m => m.default)},
    'styles-STCUJNJM.css': {size: 465, hash: 'tDwaZnLNF/s', text: () => import('./assets-chunks/styles-STCUJNJM_css.mjs').then(m => m.default)}
  },
};

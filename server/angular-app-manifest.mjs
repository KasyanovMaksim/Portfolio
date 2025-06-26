
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://KasyanovMaksim.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2813, hash: 'f841019b7fef796fbedb2f8c21ac87127374b8d12835daddc320bb5c74053216', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2672, hash: '7e8a3d9c68d38a571b6f6cdf39fd70b0c9c0c3c3924a468a18c87ee9477e144c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15294, hash: '0ef2b05d904247b3861283791005d1dc8ae7bf2c6203d39f778f09ac3eb3cd29', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-O27BUQR4.css': {size: 1854, hash: 'KGdJ4X/fyD0', text: () => import('./assets-chunks/styles-O27BUQR4_css.mjs').then(m => m.default)}
  },
};

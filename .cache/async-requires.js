// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("./../../../src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-skills-js": () => import("./../../../src/pages/skills.js" /* webpackChunkName: "component---src-pages-skills-js" */),
  "component---src-pages-test-js": () => import("./../../../src/pages/test.js" /* webpackChunkName: "component---src-pages-test-js" */),
  "component---src-pages-using-typescript-tsx": () => import("./../../../src/pages/using-typescript.tsx" /* webpackChunkName: "component---src-pages-using-typescript-tsx" */)
}



// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/mnt/hdd/keito/documents/project/portfolio_kai/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/mnt/hdd/keito/documents/project/portfolio_kai/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/mnt/hdd/keito/documents/project/portfolio_kai/src/pages/page-2.js")),
  "component---src-pages-skills-js": preferDefault(require("/mnt/hdd/keito/documents/project/portfolio_kai/src/pages/skills.js")),
  "component---src-pages-test-js": preferDefault(require("/mnt/hdd/keito/documents/project/portfolio_kai/src/pages/test.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/mnt/hdd/keito/documents/project/portfolio_kai/src/pages/using-typescript.tsx"))
}


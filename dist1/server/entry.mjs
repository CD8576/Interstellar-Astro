import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BobjEZJs.mjs';
import { manifest } from './manifest_Dwz6hfQh.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/ap.astro.mjs');
const _page2 = () => import('./pages/e/_---slug_.astro.mjs');
const _page3 = () => import('./pages/ga.astro.mjs');
const _page4 = () => import('./pages/inner.astro.mjs');
const _page5 = () => import('./pages/st.astro.mjs');
const _page6 = () => import('./pages/tb.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/ap.astro", _page1],
    ["src/pages/e/[...slug].ts", _page2],
    ["src/pages/ga.astro", _page3],
    ["src/pages/inner.astro", _page4],
    ["src/pages/st.astro", _page5],
    ["src/pages/tb.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///workspaces/Interstellar-Astro/dist/client/",
    "server": "file:///workspaces/Interstellar-Astro/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };

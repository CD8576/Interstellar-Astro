import { g as decodeKey } from './chunks/astro/server_CnrLgIpu.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B7uuLmO6.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/Interstellar-Astro/","adapterName":"@astrojs/node","routes":[{"file":"inner/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/inner","isIndex":false,"type":"page","pattern":"^\\/inner\\/?$","segments":[[{"content":"inner","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inner.astro","pathname":"/inner","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"st/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/st","isIndex":false,"type":"page","pattern":"^\\/st\\/?$","segments":[[{"content":"st","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/st.astro","pathname":"/st","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tb/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tb","isIndex":false,"type":"page","pattern":"^\\/tb\\/?$","segments":[[{"content":"tb","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tb.astro","pathname":"/tb","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CAEqpuDM.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CvH7Qr8z.js"},{"type":"external","value":"/_astro/page.CAEqpuDM.js"}],"styles":[{"type":"external","src":"/_astro/ap.B494j1kX.css"}],"routeData":{"route":"/ap","isIndex":false,"type":"page","pattern":"^\\/ap\\/?$","segments":[[{"content":"ap","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ap.astro","pathname":"/ap","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CAEqpuDM.js"}],"styles":[],"routeData":{"route":"/e/[...slug]","isIndex":false,"type":"endpoint","pattern":"^\\/e(?:\\/(.*?))?\\/?$","segments":[[{"content":"e","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/e/[...slug].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8JvywMET.js"},{"type":"external","value":"/_astro/page.CAEqpuDM.js"}],"styles":[{"type":"external","src":"/_astro/ap.B494j1kX.css"}],"routeData":{"route":"/ga","isIndex":false,"type":"page","pattern":"^\\/ga\\/?$","segments":[[{"content":"ga","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ga.astro","pathname":"/ga","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/workspaces/Interstellar-Astro/src/pages/ap.astro",{"propagation":"none","containsHead":true}],["/workspaces/Interstellar-Astro/src/pages/ga.astro",{"propagation":"none","containsHead":true}],["/workspaces/Interstellar-Astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/workspaces/Interstellar-Astro/src/pages/inner.astro",{"propagation":"none","containsHead":true}],["/workspaces/Interstellar-Astro/src/pages/st.astro",{"propagation":"none","containsHead":true}],["/workspaces/Interstellar-Astro/src/pages/tb.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/ap@_@astro":"pages/ap.astro.mjs","\u0000@astro-page:src/pages/e/[...slug]@_@ts":"pages/e/_---slug_.astro.mjs","\u0000@astro-page:src/pages/ga@_@astro":"pages/ga.astro.mjs","\u0000@astro-page:src/pages/inner@_@astro":"pages/inner.astro.mjs","\u0000@astro-page:src/pages/st@_@astro":"pages/st.astro.mjs","\u0000@astro-page:src/pages/tb@_@astro":"pages/tb.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/workspaces/Interstellar-Astro/node_modules/.pnpm/astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Dwz6hfQh.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.MDJnX47X.js","astro:scripts/page.js":"_astro/page.CAEqpuDM.js","/astro/hoisted.js?q=3":"_astro/hoisted.B0ZGK-6i.js","/astro/hoisted.js?q=0":"_astro/hoisted.8JvywMET.js","/astro/hoisted.js?q=2":"_astro/hoisted.CvH7Qr8z.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ap.B494j1kX.css","/sw.js","/_astro/hoisted.8JvywMET.js","/_astro/hoisted.B0ZGK-6i.js","/_astro/hoisted.CvH7Qr8z.js","/_astro/hoisted.MDJnX47X.js","/_astro/index.BHlL-6TY.js","/_astro/page.CAEqpuDM.js","/assets/bundled/bm-index.js","/assets/bundled/bm-worker.js","/assets/bundled/ex-index.mjs","/assets/bundled/sw.js","/assets/bundled/v.bndl.js","/assets/bundled/v.clnt.js","/assets/bundled/v.cnfg.js","/assets/bundled/v.hndlr.js","/assets/bundled/v.sw.js","/assets/media/favicons/bim.ico","/assets/media/favicons/britannica.png","/assets/media/favicons/campus.png","/assets/media/favicons/canvas.png","/assets/media/favicons/classlink-login.png","/assets/media/favicons/classroom.png","/assets/media/favicons/clever.png","/assets/media/favicons/default.png","/assets/media/favicons/deltamath.png","/assets/media/favicons/desmos.png","/assets/media/favicons/dictionary.png","/assets/media/favicons/drive.png","/assets/media/favicons/ducksters.png","/assets/media/favicons/edpuzzle.png","/assets/media/favicons/gmail.png","/assets/media/favicons/goguardian-lock.png","/assets/media/favicons/goguardian.png","/assets/media/favicons/google-docs.ico","/assets/media/favicons/google-meet.png","/assets/media/favicons/google-slides.ico","/assets/media/favicons/google.png","/assets/media/favicons/googleforms.png","/assets/media/favicons/i-ready.ico","/assets/media/favicons/ixl.png","/assets/media/favicons/kami.png","/assets/media/favicons/khan.png","/assets/media/favicons/linkit.ico","/assets/media/favicons/minga.png","/assets/media/favicons/naviance.png","/assets/media/favicons/nearpod.png","/assets/media/favicons/newsela.png","/assets/media/favicons/noredink.webp","/assets/media/favicons/pbslearningmedia.ico","/assets/media/favicons/powerschool.png","/assets/media/favicons/quizlet.webp","/assets/media/favicons/savvas-realize.png","/assets/media/favicons/schoology.ico","/assets/media/favicons/schoology.png","/assets/media/favicons/smartpass.png","/assets/media/favicons/space.ico","/assets/media/favicons/studentvue.ico","/assets/media/favicons/thesaurus.png","/assets/media/favicons/wbo.ico","/assets/media/favicons/wikipedia.png","/assets/media/favicons/worldhistoryencyclopedia.png","/_astro/page.CAEqpuDM.js","/inner/index.html","/st/index.html","/tb/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"bPVT18RW1DKbTfpAMQwjjYFC47DvXSXo6NdUb6320i4=","experimentalEnvGetSecretEnabled":false});

export { manifest };

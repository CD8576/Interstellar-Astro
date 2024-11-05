import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, e as renderSlot, b as createAstro, f as renderHead, a as renderComponent } from './astro/server_CnrLgIpu.mjs';
/* empty css                      */

const $$Astro$2 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/workspaces/Interstellar-Astro/node_modules/.pnpm/lucide-astro@0.453.0_astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2_/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/workspaces/Interstellar-Astro/node_modules/.pnpm/astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><link id="icon" rel="shortcut icon" href="/assets/media/favicons/default.png"><title>Home</title>', '<link rel="preload" href="@/lib/global.ts" as="script"><script src="/assets/bundled/v.bndl.js" defer><\/script><script src="/assets/bundled/v.cnfg.js" defer><\/script><script>\n      window.dataLayer ||= [];\n\n      function gtag(...args) {\n        dataLayer.push(args);\n      }\n      gtag("js", new Date());\n      gtag("config", "G-WKJQ5QHQTJ");\n    <\/script><script async src="https://www.googletagmanager.com/gtag/js?id=G-WKJQ5QHQTJ"><\/script>', "</head> <body> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/workspaces/Interstellar-Astro/src/layouts/Layout.astro", void 0);

export { $$ as $, $$Layout as a };

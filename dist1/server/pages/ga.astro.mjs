import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CnrLgIpu.mjs';
import { A as ASSET_URL, $ as $$PlusCircle, a as $$AssetCard } from '../chunks/AssetCard_CT8n9Bjz.mjs';
import { $ as $$Main } from '../chunks/Main_D7EUHjGw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Ga = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ga;
  const games = await (await fetch(`${ASSET_URL}/json/games.min.json`)).json();
  const customGames = Astro2.cookies.get("asset.game")?.json() ?? [];
  const all = [...customGames, ...games].sort((a, b) => {
    if (a.custom && !b.custom) return -1;
    if (!a.custom && b.custom) return 1;
    return a.name.localeCompare(b.name);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Main, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center py-8 flex-col items-center gap-4 mt-24"> <div class="flex px-4 py-3 rounded-md border-2 border-border overflow-hidden w-1/4 h-14 mx-auto"> <input id="search" placeholder="Search Games" class="w-full outline-none bg-transparent text-text text-sm"> </div> <button class="p-4 bg-interactive hover:bg-interactive-secondary rounded-md font-semibold inline-flex items-center" data-type="game" id="add-asset"> ${renderComponent($$result2, "PlusCircle", $$PlusCircle, { "class": "size-5 mr-2" })}
Add Game
</button> <div id="container" class="flex flex-wrap justify-center gap-4 flex-row mt-30"> ${all.map((game) => renderTemplate`${renderComponent($$result2, "AssetCard", $$AssetCard, { "asset": game })}`)} </div> </div> ` })} `;
}, "/workspaces/Interstellar-Astro/src/pages/ga.astro", void 0);

const $$file = "/workspaces/Interstellar-Astro/src/pages/ga.astro";
const $$url = "/ga";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ga,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

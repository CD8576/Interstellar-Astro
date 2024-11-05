import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as createAstro, d as addAttribute } from './astro/server_CnrLgIpu.mjs';
import { $ as $$ } from './Layout_D0UF6t93.mjs';
import { $ as $$Image } from './_astro_assets_CN4JdqHr.mjs';
import Cookies from 'js-cookie';

const ASSET_URL = "https://raw.githubusercontent.com/UseInterstellar/Interstellar-Assets/main";
function addAsset(name, link, type) {
  const currentAssets = JSON.parse(Cookies.get(`asset.${type}`) || "[]");
  currentAssets.push({
    name,
    link,
    image: "/icons/custom.webp",
    custom: true
  });
  Cookies.set(`asset.${type}`, JSON.stringify(currentAssets), {
    path: "/",
    expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 365)
  });
}
if (typeof window !== "undefined") {
  document.addEventListener("astro:page-load", () => {
    const buttons = document.querySelectorAll(
      "[data-asset]"
    );
    for (const button of buttons) {
      button.addEventListener("click", () => {
        const asset = JSON.parse(button.dataset.asset);
        if (asset.say) alert(asset.say);
        if (asset.link) {
          sessionStorage.setItem("goUrl", asset.link);
          return location.replace("/tb");
        }
        if (asset.links) {
          const selection = prompt(
            `Select a link to go to: ${asset.links.map(({ name }, idx) => `
${name}: ${idx + 1}`).join("")}`
          );
          if (!selection) return;
          const link = asset.links[Number.parseInt(selection) - 1];
          if (!link) return alert("Invalid selection");
          sessionStorage.setItem("goUrl", link.url);
          return location.replace("/tb");
        }
      });
    }
    const assetAdd = document.getElementById(
      "add-asset"
    );
    if (assetAdd) {
      assetAdd.addEventListener("click", async () => {
        const type = assetAdd.dataset.type;
        const name = prompt(`Enter the name of the ${type}`);
        if (!name) return alert("Invalid name");
        const link = prompt(`Enter the link of the ${type}`);
        if (!link) return alert("Invalid link");
        if (!type) return alert("Invalid type");
        addAsset(name, link, type);
        location.reload();
      });
    }
    const search = document.getElementById("search");
    const container = document.getElementById("container");
    const all = container ? Array.from(container.children) : [];
    if (search) {
      search.addEventListener("input", (e) => {
        const target = e.target;
        const query = target.value.toLowerCase();
        for (const card of all) {
          const span = card.querySelector("span");
          const name = span?.textContent ? span.textContent.toLowerCase() : "";
          card.style.display = name.includes(query) ? "" : "none";
        }
      });
    }
  });
}

const $$Astro$4 = createAstro();
const $$Ban = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Ban;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "ban", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="m4.9 4.9 14.2 14.2"></path> ` })}`;
}, "/workspaces/Interstellar-Astro/node_modules/.pnpm/lucide-astro@0.453.0_astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2_/node_modules/lucide-astro/dist/Ban.astro", void 0);

const $$Astro$3 = createAstro();
const $$CircleAlert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CircleAlert;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-alert", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <line x1="12" x2="12" y1="8" y2="12"></line> <line x1="12" x2="12.01" y1="16" y2="16"></line> ` })}`;
}, "/workspaces/Interstellar-Astro/node_modules/.pnpm/lucide-astro@0.453.0_astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2_/node_modules/lucide-astro/dist/CircleAlert.astro", void 0);

const $$Astro$2 = createAstro();
const $$PlusCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PlusCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "circle-plus", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M8 12h8"></path> <path d="M12 8v8"></path> ` })}`;
}, "/workspaces/Interstellar-Astro/node_modules/.pnpm/lucide-astro@0.453.0_astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2_/node_modules/lucide-astro/dist/PlusCircle.astro", void 0);

const $$Astro$1 = createAstro();
const $$UserRoundPlus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UserRoundPlus;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "user-round-plus", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2 21a8 8 0 0 1 13.292-6"></path> <circle cx="10" cy="8" r="5"></circle> <path d="M19 16v6"></path> <path d="M22 19h-6"></path> ` })}`;
}, "/workspaces/Interstellar-Astro/node_modules/.pnpm/lucide-astro@0.453.0_astro@4.16.2_@types+node@22.8.2_rollup@4.24.0_typescript@5.6.2_/node_modules/lucide-astro/dist/UserRoundPlus.astro", void 0);

const $$Astro = createAstro();
const $$AssetCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AssetCard;
  const { asset } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(JSON.stringify(asset), "data-asset")}> <div class="relative group cursor-pointer transition-all duration-150 hover:scale-105"> ${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "src": ASSET_URL + asset.image, "alt": asset.name, "height": 145, "width": 145, "class": "h-36 aspect-square object-cover rounded-md transition-all duration-150" })} <div class="absolute bottom-0 left-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 rounded-b-md duration-150 flex items-end p-2 px-4 font-semibold transition-all z-10"> <section${addAttribute(["inline-flex items-center gap-2 text-white", { "text-red-600": asset.error, "text-yellow-400": asset.partial }], "class:list")}> ${asset.custom && renderTemplate`${renderComponent($$result, "UserRoundPlus", $$UserRoundPlus, { "class": "size-5" })}`} ${asset.partial && renderTemplate`${renderComponent($$result, "CircleAlert", $$CircleAlert, { "class": "size-5" })}`} ${asset.error && renderTemplate`${renderComponent($$result, "Ban", $$Ban, { "class": "size-5" })}`} <span class="text-center font-semibold text-base line-clamp-4"> ${asset.name} </span> </section> </div> </div> </button> `;
}, "/workspaces/Interstellar-Astro/src/components/AssetCard.astro", void 0);

export { $$PlusCircle as $, ASSET_URL as A, $$AssetCard as a };

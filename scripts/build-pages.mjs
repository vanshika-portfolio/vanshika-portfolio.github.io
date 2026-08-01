// Static export for GitHub Pages.
//
// GitHub Pages only serves files — it cannot run this app's server. This script
// builds the client bundle, renders the page to real HTML with the same SSR
// renderer used in production, and writes a plain static site to `dist/pages/`.
//
// Usage:
//   PAGES_BASE=/my-repo/ node scripts/build-pages.mjs
//
// PAGES_BASE must be "/<repo-name>/" for project pages
// (https://<user>.github.io/<repo>/), or "/" for a user/organisation page
// repository (https://<user>.github.io) or a custom domain.

import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const rawBase = process.env.PAGES_BASE ?? "/";
const base = normaliseBase(rawBase);
const outDir = resolve(root, "dist/pages");
// Where the browser bundle lands can vary between build targets, so probe.
const clientDirCandidates = [
  "dist/client",
  ".output/public",
  "dist/.output/public",
  "dist/public",
];
// Vite writes the Node-runnable SSR bundle here during the build.
const ssrEntry = resolve(root, "node_modules/.nitro/vite/services/ssr/index.js");

function normaliseBase(value) {
  if (!value || value === "/") return "/";
  const withLeading = value.startsWith("/") ? value : `/${value}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

function run(command, args, env) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    env: { ...process.env, ...env },
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed with code ${result.status}`);
  }
}

console.log(`\n[pages] building static site with base "${base}"`);

rmSync(outDir, { recursive: true, force: true });

// 1. Build. VITE_STATIC_DEPLOY makes the app skip server-only code paths.
const viteBin = resolve(root, "node_modules/vite/bin/vite.js");
run(process.execPath, [viteBin, "build", `--base=${base}`], {
  VITE_STATIC_DEPLOY: "true",
  VITE_PAGES_BASE: base,
});

// 2. Render the page to HTML using the built SSR bundle.
const mod = await import(pathToFileURL(ssrEntry).href);
const handler = mod.default ?? mod;
const response = await handler.fetch(new Request(`http://localhost${base}`));
const html = await response.text();

if (response.status !== 200 || !html.includes("<html")) {
  throw new Error(`SSR render failed (status ${response.status}). Output:\n${html.slice(0, 800)}`);
}

// 3. Assemble the static output.
const clientDir = clientDirCandidates.map((dir) => resolve(root, dir)).find(existsSync);

if (!clientDir) {
  const listing = existsSync(resolve(root, "dist"))
    ? readdirSync(resolve(root, "dist")).join(", ")
    : "(no dist directory)";
  throw new Error(
    `Could not find the built client assets. Looked in: ${clientDirCandidates.join(", ")}.\n` +
      `dist/ contains: ${listing}`,
  );
}

console.log(`[pages] using client assets from ${clientDir}`);

mkdirSync(outDir, { recursive: true });
cpSync(clientDir, outDir, { recursive: true });
writeFileSync(resolve(outDir, "index.html"), html);
// GitHub Pages serves 404.html for unknown paths; using the same HTML keeps
// deep links and refreshes working like a single-page app.
writeFileSync(resolve(outDir, "404.html"), html);
// Stops GitHub Pages' Jekyll step from dropping files/folders starting with "_".
writeFileSync(resolve(outDir, ".nojekyll"), "");

console.log(`[pages] wrote static site to dist/pages (${(html.length / 1024).toFixed(1)} kB HTML)`);

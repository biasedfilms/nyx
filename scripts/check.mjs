import { readFile, access } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { join } from "node:path";
const exec = promisify(execFile);

for (const file of [
  "src/app.js",
  "src/vision.worker.js",
  "scripts/build.mjs",
]) {
  await exec(process.execPath, ["--check", file]);
  console.log(`✓ ${file}`);
}

const html = await readFile("index.html", "utf8");
const app = await readFile("src/app.js", "utf8");
const manifest = JSON.parse(await readFile("manifest.json", "utf8"));

for (const required of [
  "./src/app.js",
  "./src/style.css",
  "./manifest.json",
  "./icons/favicon-32.png",
  "./icons/logo-mark.png",
]) {
  if (!html.includes(required))
    throw new Error(`Missing HTML reference: ${required}`);
}

if (
  app.includes("Object.fromEntries([\n") &&
  /Object\.fromEntries\([\s\S]{0,300}?\)\.reduce\(/.test(app)
) {
  throw new Error("Found invalid Object.fromEntries(...).reduce(...) pattern");
}

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((m) => m[1]);
const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
if (duplicates.length)
  throw new Error(`Duplicate DOM ids: ${[...new Set(duplicates)].join(", ")}`);

const quotedElsBlock =
  app.match(/const els = Object\.fromEntries\(\[(.*?)\]\n?\.map/s)?.[1] || "";
const elNames = [...quotedElsBlock.matchAll(/["']([^"']+)["']/g)].map(
  (m) => m[1],
);
const missingEls = elNames.filter((id) => !ids.includes(id));
if (missingEls.length)
  throw new Error(
    `Missing DOM ids referenced by els: ${missingEls.join(", ")}`,
  );

for (const requiredFile of [
  "src/style.css",
  "src/app.js",
  "src/vision.worker.js",
  "sw.js",
  "manifest.json",
  "icons/favicon-32.png",
  "icons/favicon-48.png",
  "icons/logo-mark.png",
  "icons/icon.svg",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
]) {
  await access(requiredFile);
}

for (const icon of manifest.icons ?? [])
  await access(icon.src.replace(/^\.\//, ""));

if (
  !html.includes('meta name="viewport"') ||
  !html.includes("viewport-fit=cover")
)
  throw new Error("Missing mobile viewport configuration");
if (!app.includes("registerServiceWorker()") || !html.includes("./src/app.js"))
  throw new Error("Core bootstrap missing");
if (
  !app.includes('GOSI: { emoji: "🖕"') ||
  !app.includes('custom?.gesture === "GOSI"')
)
  throw new Error("GOSI gesture integration missing");
if (
  !app.includes('const APP_VERSION = "2.1.4"') ||
  manifest.name !== "NYX — Gesture Interface"
)
  throw new Error("Release metadata mismatch");
if (
  !app.includes("function initWorker()") ||
  !app.includes('new Worker(new URL("./vision.worker.js"')
)
  throw new Error("Worker pipeline missing");

console.log(`✓ ${elNames.length} DOM element bindings verified`);
console.log(`✓ ${manifest.icons?.length || 0} manifest icons verified`);
console.log("✓ NYX runtime safeguards verified");
console.log("✓ GOSI gesture integration verified");
console.log("✓ NYX 2.1.4 static checks passed.");

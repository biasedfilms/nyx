import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const item of ["index.html", "manifest.json", "sw.js", "start.command", "src", "icons"]) {
  await cp(join(root, item), join(dist, item), { recursive: true });
}
const pkg = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
console.log(`NYX ${pkg.version} copied to dist/`);

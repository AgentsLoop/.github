// Parse a sitemap XML file into game URL list. Usage: node scripts/parse-sitemap.mjs <file> [prefix]
import fs from 'node:fs';
const x = fs.readFileSync(process.argv[2], 'utf8');
const prefix = process.argv[3] || '';
const blocks = x.split('<url>').slice(1);
const out = [];
for (const b of blocks) {
  const loc = (b.match(/<loc>([^<]+)<\/loc>/) || [])[1] || '';
  if (prefix && !loc.startsWith(prefix)) continue;
  const mod = (b.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || '';
  const title = (b.match(/<image:title>([^<]+)<\/image:title>/) || [])[1] || '';
  const img = (b.match(/<image:loc>([^<]+)<\/image:loc>/) || [])[1] || '';
  if (loc) out.push({ loc, lastmod: mod, title, image: img });
}
console.log(JSON.stringify(out, null, 1));

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Indexable pages only (the 404s are noindex). English paths; each entry carries its Spanish alternate.
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://ysidroalmonte.com');
  const cases = await getCollection('work');
  const paths = ['/', '/work/', '/about/', '/contact/', '/mobile/', ...cases.map((c) => `/work/${c.id}/`)];
  const abs = (p: string) => new URL(p, base).toString();
  const urls = paths.map((p) => {
    const es = '/es' + p;
    return `  <url>
    <loc>${abs(p)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(p)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${abs(es)}"/>
  </url>
  <url>
    <loc>${abs(es)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(p)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${abs(es)}"/>
  </url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

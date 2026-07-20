export const prerender = true;

export async function GET() {
  const site = 'https://custom-code.132073.xyz';
  const pages = ['', 'oferta', 'privacy'];
  
  const body = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => `
    <url>
      <loc>${site}/${page}</loc>
      <changefreq>monthly</changefreq>
      <priority>${page === '' ? '1.0' : '0.5'}</priority>
    </url>
    `).join('')}
  </urlset>`.trim();

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}

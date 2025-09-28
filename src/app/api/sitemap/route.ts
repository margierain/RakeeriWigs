import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://rakeeri.com'
  const currentDate = new Date().toISOString()

  const staticPages = [
    {
      url: '',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: '/shop',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: '/services',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: '/wholesale',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/quiz',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    }
  ]

  const productPages = [
    'the-boardroom-boss-wig',
    'the-confidence-multiplier',
    'the-matatu-queen',
    'the-nairobi-natural',
    'the-braided-beauty',
    'the-executive-edge'
  ]

  const servicePages = [
    'training',
    'consultation',
    'custom'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
  
  ${productPages.map(product => `
    <url>
      <loc>${baseUrl}/shop/${product}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
  
  ${servicePages.map(service => `
    <url>
      <loc>${baseUrl}/services/${service}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
}


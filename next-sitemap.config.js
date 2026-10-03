/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://masterguyarjun.online',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/server-sitemap.xml'],
  outDir: './out',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://masterguyarjun.online/sitemap.xml',
    ],
  },
};

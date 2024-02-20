/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://ape-dev.de',
    outDir: './out',
    generateIndexSitemap: false,
}
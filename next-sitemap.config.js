/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://ape-dev.de',
    generateRobotsTxt: true,
    outDir: './out',
    generateIndexSitemap: false
}
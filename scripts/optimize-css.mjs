import Critters from 'critters';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

async function findHtmlFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeCriticalCss() {
  const critters = new Critters({
    path: 'out',
    publicPath: '/',
    preload: 'media',
    preloadFonts: true,
    inlineFonts: true,
    fonts: true,
    keyframes: 'critical',
    compress: true,
    pruneSource: false,
    mergeStylesheets: true,
    reduceInlineStyles: false,
    additionalStylesheets: [],
  });

  const htmlFiles = await findHtmlFiles('out');

  console.log(`Found ${htmlFiles.length} HTML files to optimize...`);

  for (const file of htmlFiles) {
    try {
      const html = await readFile(file, 'utf-8');
      let optimized = await critters.process(html);

      // Make external CSS load asynchronously with noscript fallback
      optimized = optimized.replace(
        /<link([^>]*?)rel=["']stylesheet["']([^>]*?)href=["']([^"']+)["']([^>]*?)>/gi,
        (match, before, after, href, rest) => {
          if (match.includes('media="print"') || match.includes('data-inline')) {
            return match;
          }
          // Add media="print" onload trick for async CSS loading with noscript fallback
          const asyncLink = `<link${before}rel="stylesheet"${after}href="${href}"${rest} media="print" onload="this.media='all'; this.onload=null;">`;
          const noscriptFallback = `<noscript><link rel="stylesheet" href="${href}"></noscript>`;
          return asyncLink + noscriptFallback;
        }
      );

      await writeFile(file, optimized);
      console.log(`✓ Optimized: ${file}`);
    } catch (error) {
      console.error(`✗ Failed to optimize ${file}:`, error.message);
    }
  }

  console.log('\n✅ Critical CSS optimization complete!');
  console.log('CSS files will now load asynchronously to prevent render blocking.');
}

optimizeCriticalCss().catch(console.error);

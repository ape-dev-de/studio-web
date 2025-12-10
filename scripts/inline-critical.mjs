import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import CleanCSS from 'clean-css';

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

async function inlineCriticalCss() {
  // Read and minify critical CSS
  const criticalCss = await readFile('src/styles/critical.css', 'utf-8');
  const minifier = new CleanCSS({ level: 2 });
  const minified = minifier.minify(criticalCss);

  if (minified.errors.length > 0) {
    console.error('CSS minification errors:', minified.errors);
    return;
  }

  const inlineStyles = `<style>${minified.styles}</style>`;

  const htmlFiles = await findHtmlFiles('out');

  console.log(`Inlining critical CSS into ${htmlFiles.length} HTML files...`);

  for (const file of htmlFiles) {
    try {
      let html = await readFile(file, 'utf-8');

      // Insert critical CSS right after <head>
      html = html.replace(/<head>/i, `<head>${inlineStyles}`);

      await writeFile(file, html);
      console.log(`✓ Inlined critical CSS: ${file}`);
    } catch (error) {
      console.error(`✗ Failed to inline CSS in ${file}:`, error.message);
    }
  }

  console.log(`\n✅ Inlined ${(minified.styles.length / 1024).toFixed(2)} KB of critical CSS`);
}

inlineCriticalCss().catch(console.error);

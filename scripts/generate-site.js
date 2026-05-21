const fs = require('fs');
const path = require('path');

const BLOG_DIR = 'blog';
const OUTPUT_DIR = 'public';

// Ensure the output directory exists before writing any files
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Read all markdown files from the blog/ directory
// We use readdirSync because this script runs synchronously at build time
const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

// Store article metadata for the index page
const articles = [];

// Process each markdown file and generate a corresponding HTML page
files.forEach(file => {
  const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');

  // Skip empty files — they haven't been generated yet
  if (content.trim() === '') {
    console.log(`Skipping empty file: ${file}`);
    return;
  }

  // Extract title from frontmatter
  const titleMatch = content.match(/^title:\s*"?(.+?)"?\s*$/m);
  const title = titleMatch ? titleMatch[1] : file.replace('.md', '');

  // Extract summary from frontmatter
  const summaryMatch = content.match(/^summary:\s*"?(.+?)"?\s*$/m);
  const summary = summaryMatch ? summaryMatch[1] : '';

  // Extract tags from frontmatter
  const tagsMatch = content.match(/^tags:\s*\[(.+?)\]/m);
  const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()) : [];

  // Remove the frontmatter block from the content before rendering
  const body = content.replace(/^---[\s\S]+?---/, '').trim();

  // Convert basic markdown to HTML (headings, paragraphs)
  const htmlBody = body
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<h[1-3]>)(.+)$/gm, '<p>$1</p>');

  // Build the slug from the filename (without extension)
  const slug = file.replace('.md', '');

  // Generate the individual article HTML page
  const articleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — CodeChronicle</title>
  <style>
    body { font-family: sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; line-height: 1.7; color: #222; }
    h1, h2, h3 { color: #111; }
    .tags span { background: #f0f0f0; border-radius: 4px; padding: 2px 8px; margin-right: 6px; font-size: 0.85em; }
    .summary { color: #555; font-style: italic; margin-bottom: 24px; }
    a { color: #0070f3; }
    nav { margin-bottom: 32px; }
  </style>
</head>
<body>
  <nav><a href="index.html">← Back to index</a></nav>
  <h1>${title}</h1>
  <p class="summary">${summary}</p>
  <div class="tags">${tags.map(t => `<span>${t}</span>`).join('')}</div>
  <hr />
  ${htmlBody}
</body>
</html>`;

  // Write the article HTML file to the public/ directory
  fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.html`), articleHtml, 'utf8');
  console.log(`Generated: public/${slug}.html`);

  // Store metadata for the index page
  articles.push({ title, summary, slug, tags });
});

// Generate the index page listing all articles
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CodeChronicle — Technical Blog</title>
  <style>
    body { font-family: sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; line-height: 1.7; color: #222; }
    h1 { color: #111; }
    .article-card { border: 1px solid #eee; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
    .article-card h2 { margin: 0 0 8px; }
    .article-card p { margin: 0 0 12px; color: #555; }
    .tags span { background: #f0f0f0; border-radius: 4px; padding: 2px 8px; margin-right: 6px; font-size: 0.85em; }
    a { color: #0070f3; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>📝 CodeChronicle</h1>
  <p>Automated technical blog powered by GitHub Actions & AI.</p>
  <hr />
  ${articles.map(a => `
  <div class="article-card">
    <h2><a href="${a.slug}.html">${a.title}</a></h2>
    <p>${a.summary}</p>
    <div class="tags">${a.tags.map(t => `<span>${t}</span>`).join('')}</div>
  </div>`).join('')}
</body>
</html>`;

// Write the index HTML file to the public/ directory
fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml, 'utf8');
console.log('Generated: public/index.html');
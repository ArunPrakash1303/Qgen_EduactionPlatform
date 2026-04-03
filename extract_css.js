const fs = require('fs');
const html = fs.readFileSync('qgen-app.html', 'utf8');
const match = html.match(/<style>([\s\S]*?)<\/style>/);
if (match) {
  let css = match[1];
  fs.writeFileSync('src/index.css', css);
  console.log('CSS extracted directly from html to index.css');
} else {
  console.log('Error: <style> not found');
}

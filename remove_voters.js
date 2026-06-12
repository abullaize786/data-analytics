const fs = require('fs');

// --- 1. Clean index.html ---
let html = fs.readFileSync('index.html', 'utf8');

// Remove nav item
const navRegex = /<button class="nav-item" data-tab="voters">[\s\S]*?<\/button>/;
html = html.replace(navRegex, '');

// Remove the whole tab-voters section. We can find where it starts and ends
const tabStart = html.indexOf('<!-- TAB: Voters Analytics -->');
if (tabStart !== -1) {
  // It ends right before </main>
  const mainEnd = html.indexOf('</main>', tabStart);
  if (mainEnd !== -1) {
    html = html.substring(0, tabStart) + html.substring(mainEnd);
  }
}

fs.writeFileSync('index.html', html);
console.log('Removed voters tab from index.html');

// --- 2. Clean app.js ---
let js = fs.readFileSync('app.js', 'utf8');

// Remove Voters Tab Logic block
const tabLogicRegex = /\s*\/\/\s*Voters Tab Logic[\s\S]*?}\s*\n/;
js = js.replace(tabLogicRegex, '\n');

// Remove PREMIUM VOTERS DASHBOARD LOGIC block
const fetchLogicStart = js.indexOf('// ==========================================');
const fetchLogicTitle = js.indexOf('// PREMIUM VOTERS DASHBOARD LOGIC');

if (fetchLogicStart !== -1 && fetchLogicTitle !== -1) {
  // It's basically the end of the file
  js = js.substring(0, fetchLogicStart);
}

fs.writeFileSync('app.js', js);
console.log('Removed voters logic from app.js');

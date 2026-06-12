const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove voters category card
const votersCardRegex = /<!-- New Voters Category -->[\s\S]*?<button class="category-card" data-category="voters">[\s\S]*?<\/button>/;
html = html.replace(votersCardRegex, '');

// 2. Remove votersContainer from its current position
const votersContainerRegex = /<!-- Voters Data Container \(Hidden by default\) -->[\s\S]*?<section id="votersContainer" class="voters-section" style="display: none; margin-top: 2rem;">([\s\S]*?)<\/section>/;
const match = html.match(votersContainerRegex);
if (match) {
  html = html.replace(match[0], '');
}

// 3. Insert Voters nav-item in sidebar
const profileNavRegex = /<button class="nav-item" data-tab="profile">/;
const newNav = `<button class="nav-item" data-tab="voters">
          <i data-lucide="users"></i>
          <span>Voters</span>
        </button>
        <button class="nav-item" data-tab="profile">`;
html = html.replace(profileNavRegex, newNav);

// 4. Extract the districtSelect options to reuse for the new tab
const districtSelectRegex = /<select id="districtSelect" class="district-select">([\s\S]*?)<\/select>/;
const optionsMatch = html.match(districtSelectRegex);
const selectOptions = optionsMatch ? optionsMatch[1] : '';

// 5. Inject tab-voters right before </main>
// We need to build the new tab structure
const votersTabHtml = `
      <!-- TAB: Voters Analytics -->
      <section class="tab-pane" id="tab-voters">
        <div class="tab-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <div>
            <h2>Voters Dashboard</h2>
            <p>Constituency-wise demographic breakdowns</p>
          </div>
          <div class="selector-container" style="min-width: 200px;">
            <label for="votersDistrictSelect" class="selector-label">Select District</label>
            <div class="custom-select-wrapper">
              <select id="votersDistrictSelect" class="district-select">
${selectOptions}
              </select>
              <i data-lucide="chevron-down" class="select-chevron"></i>
            </div>
          </div>
        </div>

        <section id="votersContainer" class="voters-section" style="display: block;">
          <div class="voters-dashboard" style="display: grid; grid-template-columns: 1fr; gap: 20px;">
            <div class="table-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-lg); overflow-x: auto; border: 1px solid var(--border-color);">
              <table id="votersTable" style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                  <tr style="border-bottom: 2px solid var(--border-color);">
                    <th style="padding: 12px; font-weight: 600;">Constituency</th>
                    <th style="padding: 12px; font-weight: 600;">Total Voters</th>
                    <th style="padding: 12px; font-weight: 600;">Male</th>
                    <th style="padding: 12px; font-weight: 600;">Female</th>
                    <th style="padding: 12px; font-weight: 600;">18-30</th>
                    <th style="padding: 12px; font-weight: 600;">30-40</th>
                    <th style="padding: 12px; font-weight: 600;">40-50</th>
                    <th style="padding: 12px; font-weight: 600;">50-60</th>
                    <th style="padding: 12px; font-weight: 600;">60-70</th>
                    <th style="padding: 12px; font-weight: 600;">70-80</th>
                  </tr>
                </thead>
                <tbody id="votersTableBody">
                  <!-- Dynamically populated -->
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
`;

html = html.replace(/<\/main>/, `${votersTabHtml}\n    </main>`);
fs.writeFileSync('index.html', html);
console.log("Updated index.html");

// 6. Update app.js
let js = fs.readFileSync('app.js', 'utf8');

// Remove the special voters block in renderDashboard
const votersBlockRegex = /\/\/ ==========================================\s*\/\/ NEW: Handle Voters Category\s*\/\/ ==========================================\s*const votersContainer = document\.getElementById\('votersContainer'\);[\s\S]*?\/\/ Restore standard view[\s\S]*?if \(statsList && statsList\.parentElement\) statsList\.parentElement\.style\.display = 'flex';\s*\}/;
js = js.replace(votersBlockRegex, '');

// Wait, the block continues until `const catData = district[activeCategory];`. 
// I'll just find and remove lines containing votersContainer from renderDashboard manually, or replace the whole renderDashboard function.
// Actually, it's safer to just replace `if (activeCategory === 'voters')` with `if (false)` or just remove it using string slicing.
// Instead of complex regex for app.js, I will do it with multi_replace_file_content after this script runs.

fs.writeFileSync('app.js', js);


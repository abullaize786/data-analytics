const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');

// Find where the invalid insertion happened
const splitPoint = content.indexOf('\n,\n  ariyalur: {');

if (splitPoint !== -1) {
  // Extract the bad additions
  const badEndStart = splitPoint + 1; // Start from the comma
  let bottomPart = content.substring(badEndStart);
  
  // Remove it from the original content
  content = content.substring(0, splitPoint);
  
  // Find where districtData ends. It's right before "const templeData = {"
  const templeDataIdx = content.indexOf('const templeData = {');
  if (templeDataIdx !== -1) {
    // The closing brace of districtData is right before this.
    // We'll search backwards for '};'
    const lastBraceIdx = content.lastIndexOf('};', templeDataIdx);
    
    // Extract the districts addition block (without the module.exports part that was also appended)
    const moduleExportsIdx = bottomPart.indexOf('};\nmodule.exports');
    if (moduleExportsIdx !== -1) {
      // Get just the comma and the districts
      const districtsToAdd = bottomPart.substring(0, moduleExportsIdx);
      
      // Reconstruct the file:
      // 1. Everything up to the '}' closing districtData
      // 2. The new districtsToAdd
      // 3. '};\n'
      // 4. Everything from 'const templeData' to the end of original content
      // 5. 'module.exports = { districtData, templeData, daData };'
      
      const p1 = content.substring(0, lastBraceIdx);
      const p2 = districtsToAdd;
      const p3 = '\n};\n';
      const p4 = content.substring(templeDataIdx);
      const p5 = '\nmodule.exports = { districtData, templeData, daData };\n';
      
      fs.writeFileSync('data.js', p1 + p2 + p3 + p4 + p5);
      console.log('Fixed data.js successfully');
    }
  }
} else {
  console.log("No invalid insertion found");
}

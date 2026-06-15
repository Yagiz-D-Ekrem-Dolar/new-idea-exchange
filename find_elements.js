const fs = require('fs');
const content = fs.readFileSync('public/app.js', 'utf8');
const lines = content.split('\n');

console.log("=== STATUS BAR ===");
lines.forEach((line, i) => {
  if (line.includes('stock-mobile-status') || line.includes('battery-charging') || line.includes('wifi') || line.includes('8:21') || line.includes('8:25')) {
    console.log(`${i+1}: ${line.trim()}`);
  }
});

console.log("\n=== AI CHET / ASSISTANT ===");
lines.forEach((line, i) => {
  if (line.includes('submit-ai-chat') || line.includes('renderAiAssistant') || line.includes('renderAiChat') || line.includes('renderAssistant')) {
    console.log(`${i+1}: ${line.trim()}`);
  }
});

console.log("\n=== VERİLER / VERİ & BİLGİ ===");
lines.forEach((line, i) => {
  if (line.includes('Veriler') || line.includes('"data"') || line.includes("'data'")) {
    if (line.includes('label:') || line.includes('title:') || line.includes('case "data"') || line.includes('case \'data\'')) {
      console.log(`${i+1}: ${line.trim()}`);
    }
  }
});

console.log("\n=== HAMBURGER MENU / KANALLAR ===");
lines.forEach((line, i) => {
  if (line.includes('renderMenu') || line.includes('navItems') || line.includes('renderSidebar') || line.includes('toggle-menu')) {
    if (line.includes('function') || line.includes('const') || line.includes('let')) {
      console.log(`${i+1}: ${line.trim()}`);
    }
  }
});

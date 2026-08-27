const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The issue: class="something data-aos="fade-up" data-aos-delay="100""
// Or: class="something data-aos="fade-up" relative"
// We want to replace this malformed syntax globally.

// Using a simpler string replacement loop or regex
html = html.replace(/class=\"([^\"]*?)\s*(data-aos=\"[^\"]+\")\s*(data-aos-delay=\"[^\"]+\")?\s*([^\"]*?)\"/g, (match, before, aos, delay, after) => {
    let newClass = (before + (after ? ' ' + after : '')).trim();
    return `class=\"${newClass}\" ${aos}${delay ? ' ' + delay : ''}`;
});

fs.writeFileSync('index.html', html);
console.log('Fixed HTML syntax errors');

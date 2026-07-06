const fs = require('fs');
const path = require('path');
const dir = 'components/svg';
fs.readdirSync(dir).filter(f => f.endsWith('.svg')).forEach(f => {
  const file = path.join(dir, f);
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/fill="(?!(?:none|currentColor))[^"]+"/g, 'fill="currentColor"');
  fs.writeFileSync(file, content);
});

const { execSync } = require('child_process');
const fs = require('fs');

const FILE = '.commit-count';

let count = 1;
if (fs.existsSync(FILE)) {
  const current = fs.readFileSync(FILE, 'utf-8');
  count = parseInt(current.trim(), 10) + 1;
}

fs.writeFileSync(FILE, count.toString());

const message = `commit ${count}`;
execSync(`git add . && git commit -m "${message}" && git push`, { stdio: 'inherit' });

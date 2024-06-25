import fs from 'fs';

function findSecondInstanceIndex(str, char) {
  // Find the index of the first instance of the character
  const firstIndex = str.indexOf(char);

  // Check if the first instance was found and if there is a second instance
  if (firstIndex !== -1) {
    // Find the index of the second instance of the character, starting the search after the first instance
    const secondIndex = str.indexOf(char, firstIndex + 1);
    return secondIndex;
  } else {
    // If the character is not found at all, return -1
    return -1;
  }
}

const lines = fs
  .readFileSync('public/data/operators.md')
  .toString()
  .split('\n');

let currentDomain = '';
let currentCategory = '';

const operators = [];

lines.forEach((line) => {
  if (line.startsWith('## ')) {
    // get the value inside the brackets
    const domain = line.match(/\[(.*)\]/)[1];
    currentDomain = domain;
    currentCategory = line.replace('## ', '').replace(domain, '').trim();
  } else if (line.startsWith('### ')) {
    currentCategory = line.replace('### ', '').trim();
  } else if (line.startsWith('- [')) {
    const aliases = [];
    const regex = /\[(.*?)\]/g;
    let match;
    while ((match = regex.exec(line)) !== null) {
      aliases.push(match[1]);
    }
    const description = line.slice(line.lastIndexOf(':') + 1).trim();
    const domain = {
      'Gen Common Operators': 'all',
      'gen\\~ Operators': 'audio',
      'Jitter Operators': 'matrix',
    }[currentDomain];
    operators.push({
      category: currentCategory,
      aliases,
      description,
      domain,
    });
  }
});

fs.writeFileSync(
  'public/data/operators.jsonl',
  operators.map((operator) => JSON.stringify(operator)).join('\n')
);

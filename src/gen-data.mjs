import * as board from './board.mjs';
import * as fs from 'fs';

const data = [];
for (let i = 0; i < board.SPACE; i++) {
  data.push({
    board: i,
    valid: board.valid_board(i)
  });
}

let validCount = 0;
data.map(x => x.valid ? validCount++ : null);

console.log("total", data.length);
console.log("valid", validCount);
console.log("invalid", data.length - validCount);

fs.writeFile('data.json', JSON.stringify(data), (err) => {
  if (err) console.log('failed:', err);
});

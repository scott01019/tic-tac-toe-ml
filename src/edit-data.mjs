import { default as tf } from '@tensorflow/tfjs-node';

import * as board from './board.mjs';
import * as fs from 'fs';

let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const valid = data.filter(x => x.valid);

console.log(valid);

for (let i = 0; i < 9; i++) {
  data = data.concat(valid);
}

console.log(data[0], data[1], data[2], data.length);

tf.util.shuffle(data);

console.log(data[0], data[1], data[2], data.length);

fs.writeFile('data.json', JSON.stringify(data), (err) => {
  if (err) console.log('failed:', err);
});

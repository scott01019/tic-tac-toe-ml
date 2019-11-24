import { default as tf } from '@tensorflow/tfjs-node';

import * as board from './board.mjs';
import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

console.log(data[0], data[1], data[2]);

tf.util.shuffle(data);

console.log(data[0], data[1], data[2]);


const inputsArr = data.map(d => d.board);
const labelsArr = data.map(d => d.valid);

const inputs = tf.tensor(inputsArr);
const labels = tf.tensor(labelsArr);

(async () => {
  const model = await tf.loadLayersModel(`file:///home/scott/code/tic-tac-toe-ml/models/${process.argv[2]}/model.json`);

  model.weights.forEach(w => {
    console.log(w.name, w.shape, JSON.stringify(w));
  });
})();

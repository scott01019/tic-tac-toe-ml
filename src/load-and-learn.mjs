import { default as tf } from '@tensorflow/tfjs-node';

import * as board from './board.mjs';
import * as os from 'os';
import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

console.log('pre shuffle', data[0], data[1], data[2], data.length);

tf.util.shuffle(data);

console.log('after shuffle', data[0], data[1], data[2], data.length);



const inputsArr = data.map(d => d.board);
const labelsArr = data.map(d => d.valid);

const inputs = tf.tensor(inputsArr);
const labels = tf.tensor(labelsArr);

inputs.print();
labels.print();


(async () => {
  const model = await tf.loadLayersModel(`file:///home/scott/code/tic-tac-toe-ml/models/${process.argv[2]}/model.json`);

  setInterval(() => {
    console.log(os.cpus());
    console.log(os.totalmem());
    console.log(os.freemem());
  }, 1000);

  model.summary();

  model.compile({
    optimizer: 'sgd',
    loss: 'meanSquaredError'
  });

  model.fit(inputs, labels, {
    epochs: 10,
    batchSize: 32,
  }).then(info => {
   console.log('Final accuracy', info.history);
  });

  model.save(`file:///home/scott/code/tic-tac-toe-ml/models/${process.argv[2]}`);
})();


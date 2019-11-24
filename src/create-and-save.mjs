import { default as tf } from '@tensorflow/tfjs-node';

const model = tf.sequential({
  layers: [
    tf.layers.dense({ inputShape: [1000], units: 10, activation: 'softmax' }),
    tf.layers.dense({ units: 1, activation: 'softmax' })
  ]
});

model.compile({
  optimizer: 'sgd',
  loss: 'meanSquaredError'
});

model.summary();

model.save(`file:///home/scott/code/tic-tac-toe-ml/models/model-${Date.now()}`);

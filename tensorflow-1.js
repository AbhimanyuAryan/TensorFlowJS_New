const tf = require('@tensorflow/tfjs');
// Load the binding
require('@tensorflow/tfjs-node');

const data2x2 = tf.tensor([1,2,3.6,4], [2, 2]);
console.log(data2x2.toString());

const data2x3 = tf.tensor([2,3,5,5.2,10,6.6,7,8612.2], [2,2,2]);
console.log(data2x3);
console.log(data2x3.toString());

const values = [];
for(let i = 0; i < 30; i++) {
    values[i] = (Math.random() * Math.floor(100));
}

const shape = [2, 5, 3];
const data2x5x3 = tf.tensor(values, shape, 'int32');
console.log(data2x5x3.toString());
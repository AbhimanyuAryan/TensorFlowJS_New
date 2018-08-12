const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const values = [];
for(let i = 0; i < 15; i++) {
    values[i] = (Math.random() * Math.floor(100));
}

const shapeA = [5, 3];
const shapeB = [3, 5];
const a = tf.tensor(values, shapeA, 'int32');
const b = tf.tensor(values, shapeA, 'int32');

const d = b.transpose();

const c = a.matMul(d);
console.log(c.data());

// tense.data().then((shit) => console.log(shit))

// console.log(tense.dataSync());
// console.log(tense.get(1));  <- This doesn't work

// const vtense = tf.variable(tense); // converting tensor into variable
// console.log(vtense);  // now this has new thing called trainable
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const values = [];
for(let i = 0; i < 150000; i++) {
    values[i] = (Math.random() * Math.floor(100));
}

const shape = [500, 300];

// tf.dispose(works for one tensor only)

tf.tidy(() => {
    while(true){
        const a = tf.tensor(values, shape, 'int32');
        // tf.keep() to keep something
        const b = tf.tensor(values, shape, 'int32');

        const b_t = b.transpose();
        const c = a.matMul(b_t);
    }
});
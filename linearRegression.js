// const tf = require('@tensorflow/tfjs');
// require('@tensorflow/tfjs-node');

/// <reference path="./p5.global-mode.d.ts" />

// Scholastic Gradient Decend - Slowly ajust value of m & b to minimize loss function
let x_vals = [];
let y_vals = [];

let m, b;

const learningRate = 0.02;
const optimizer = tf.train.sgd(learningRate);

// Mean Squared error
// optimzer minimises the loss function with a learning rate
// y = mx + b

function setup() {
    createCanvas(400, 400);

    m = tf.variable(tf.scalar(Math.floor(Math.random() * Math.floor(2))));
    b = tf.variable(tf.scalar(Math.floor(Math.random() * Math.floor(2))));
}

function loss(pred, labels) {
    // (guess - y)^2 Mean Squared error
    return pred.sub(labels).square().mean();
}

// y = mx + b; //m slope  b is y-intercept
function predict(x) {
    const xs = tf.tensor1d(x);
    // y = mx + b
    const ys = xs.mul(m).add(b);
    return ys;
}

function mousePressed() {
    let x = map(mouseX, 0, width, 0, 1);
    let y = map(mouseY, 0, height, 1, 0);
    x_vals.push(x);
    y_vals.push(y);
}

function draw() {
    if(x_vals.length > 0) {
        const ys = tf.tensor1d(y_vals);
        optimizer.minimize(() => loss(predict(x_vals), ys));
    }

    background(124,421,44);

    stroke(255, 0, 0);
    strokeWeight(8);
    for (let i = 0; i < x_vals.length; i++) {
        let px = map(x_vals[i], 0, 1, 0, width);
        let py = map(y_vals[i], 0, 1, height, 0);
        point(px, py);
    }
}
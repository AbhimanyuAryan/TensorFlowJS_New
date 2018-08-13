// const tf = require('@tensorflow/tfjs');
// require('@tensorflow/tfjs-node');

/// <reference path="./p5.global-mode.d.ts" />

let x_vals = [];
let y_vals = [];

let m, b;

// Mean Squared error
// optimzer minimises the loss function with a learning rate
// y = mx + b

function setup() {
    createCanvas(400, 400);
}

// y = mx + b; //m slope  b is y-intercept

function mousePressed() {
    let x = map(mouseX, 0, width, 0, 1);
    let y = map(mouseY, 0, height, 1, 0);
    x_vals.push(x);
    y_vals.push(y);
}

function draw() {
    background(124,421,44);

    stroke(255, 0, 0);
    strokeWeight(8);
    for (let i = 0; i < x_vals.length; i++) {
        let px = map(x_vals[i], 0, 1, 0, width);
        let py = map(y_vals[i], 0, 1, height, 0);
        point(px, py);
    }
}
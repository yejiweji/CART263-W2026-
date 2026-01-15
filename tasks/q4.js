// Task 1 - Q4 Yejin Oh 40229957


// Canvas dimensions
const canvasWidth = 600;
const canvasHeight = 400;

// Rectangle dimensions
const rectWidth = canvasWidth / 3; // each rectangle is 1/3 of canvas width
const rectHeight = canvasHeight;

// Rectangle positions (x coordinates)
const x1 = 0;                 // first column
const x2 = rectWidth;         // second column
const x3 = 2 * rectWidth;     // third column
const yPos = 0;               // all rectangles start at top

// Original colours
const colour1 = {r: 120, g: 215, b: 240};    //lightest
const colour2 = {r: 51, g: 164, b: 204};   
const colour3 = {r: 19, g: 99, b: 128};     //darkest

// Current rectangle colours (variables will change on mouse-over)
let currR1, currG1, currB1;
let currR2, currG2, currB2;
let currR3, currG3, currB3;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // Initialize current colours to original colours
    currR1 = colour1.r;
    currG1 = colour1.g;
    currB1 = colour1.b;

    currR2 = colour2.r;
    currG2 = colour2.g;
    currB2 = colour2.b;

    currR3 = colour3.r;
    currG3 = colour3.g;
    currB3 = colour3.b;
}

function draw() {
    background(0); // clear the canvas each frame

    // ---- Check if mouse is over rectangle 1 ----
    if (mouseX >= x1 && mouseX <= x1 + rectWidth && mouseY >= yPos && mouseY <= yPos + rectHeight) {
        currR1 = 255;
        currG1 = 255;
        currB1 = 255;
    } else {
        // revert to original colour
        currR1 = colour1.r;
        currG1 = colour1.g;
        currB1 = colour1.b;
    }

    // ---- Check if mouse is over rectangle 2 ----
    if (mouseX >= x2 && mouseX <= x2 + rectWidth && mouseY >= yPos && mouseY <= yPos + rectHeight) {
        currR2 = 255;
        currG2 = 255;
        currB2 = 255;
    } else {
        // revert to original colour
        currR2 = colour2.r;
        currG2 = colour2.g;
        currB2 = colour2.b;
    }

    // ---- Check if mouse is over rectangle 3 ----
    if (mouseX >= x3 && mouseX <= x3 + rectWidth && mouseY >= yPos && mouseY <= yPos + rectHeight) {
        currR3 = 255;
        currG3 = 255;
        currB3 = 255;
    } else {
        // revert to original colour
        currR3 = colour3.r;
        currG3 = colour3.g;
        currB3 = colour3.b;
    }

    // ---- Draw the three rectangles ----
    fill(currR1, currG1, currB1);
    rect(x1, yPos, rectWidth, rectHeight);

    fill(currR2, currG2, currB2);
    rect(x2, yPos, rectWidth, rectHeight);

    fill(currR3, currG3, currB3);
    rect(x3, yPos, rectWidth, rectHeight);
}

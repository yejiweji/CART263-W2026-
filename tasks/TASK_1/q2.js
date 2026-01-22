// Task 1 - Q2 Yejin Oh 40229957


function drawEllipse(x, y, w, h, r, g, b) {
    fill(r, g, b);
    ellipse(x, y, w, h);
}

function setup() {
    createCanvas(600, 400);
    background(0);

    drawEllipse(60, 50, 80, 80, 255, 192, 203);
    drawEllipse(130, 140, 100, 100, 255, 105, 180);
    drawEllipse(240, 240, 140, 140, 255, 0, 255);
}
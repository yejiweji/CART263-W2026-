// Task 1 - Q1 Yejin Oh 40229957

function setup() {
    createCanvas(600, 400);
    background(0);
    
    let x, y, w, h;
    let r, g, b;

    /* Ellipse 1 */
    x = 60;
    y = 50;
    w = 80;
    h = 80;
    r = 255;
    g = 192;
    b = 203;

    fill(r, g, b);
    ellipse(x, y, w, h);

    /* Ellipse 2 */
    x = 130;
    y = 140;
    w = 100;
    h = 100;
    r = 255;
    g = 105;
    b = 180;

    fill(r, g, b);
    ellipse(x, y, w, h);

    /* Ellipse 3 */
    x = 240;
    y = 240;
    w = 140;
    h = 140;
    r = 255;
    g = 0;
    b = 255;

    fill(r, g, b);
    ellipse(x, y, w, h);
}


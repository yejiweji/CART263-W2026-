setup_B();
/** THEME: CHAOS  */
function setup_B() {
  console.log("in b");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_B`, "ani_canvB",aniA,aniB,aniC,aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
   
  function aniA(parentCanvas) {
  console.log("in ani-A -teamB");

  // set canvas background to black
  parentCanvas.style.backgroundColor = "black";

  const shapes = [];
  const colours = ["#ff06389a", "#ff8000c4", "#23ff6c8f", "#009acdc5", "#ff07f79f", "#ffe60090"];
  const numShapes =100;

  // create 30 chaotic shapes
  for (let i = 0; i < numShapes; i++) {
    const shape = document.createElement("div");
    shape.classList.add("TEAM_B_ANI_A_Div");

    // random size
    const size = Math.random() * 40 + 20;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    // random position
    shape.style.position = "absolute";
    shape.style.left = `${Math.random() * (parentCanvas.clientWidth - size)}px`;
    shape.style.top = `${Math.random() * (parentCanvas.clientHeight - size)}px`;

    // random colour
    shape.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];

    // random shape: circle or square
    shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%";

    // random chaotic speed (faster!)
    shape.vx = (Math.random() - 0.5) * 6; // x speed
    shape.vy = (Math.random() - 0.5) * 6; // y speed

    parentCanvas.appendChild(shape);
    shapes.push(shape);
  }

  // click anywhere = chaos boost
  parentCanvas.addEventListener("click", () => {
    for (let shape of shapes) {
      const shapeSize = parseFloat(shape.style.width);

      // random size
      const newSize = Math.random() * 40 + 20;
      shape.style.width = `${newSize}px`;
      shape.style.height = `${newSize}px`;

      // random colour
      shape.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];

      // random rotation
      shape.style.transform = `rotate(${Math.random() * 360}deg)`;

      // random shape
      shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%";

      // random speed boost for extra chaos
      shape.vx = (Math.random() - 0.5) * 10;
      shape.vy = (Math.random() - 0.5) * 10;
    }
  });

  // animate shapes
  function animate() {
    if (parentCanvas.style.display === "block") {
      for (let shape of shapes) {
        let x = parseFloat(shape.style.left);
        let y = parseFloat(shape.style.top);
        const size = parseFloat(shape.style.width);

        // move shape
        x += shape.vx;
        y += shape.vy;

        // bounce off canvas edges
        if (x <= 0 || x >= parentCanvas.clientWidth - size) shape.vx *= -1;
        if (y <= 0 || y >= parentCanvas.clientHeight - size) shape.vy *= -1;

        // apply new position
        shape.style.left = `${Math.max(0, Math.min(parentCanvas.clientWidth - size, x))}px`;
        shape.style.top = `${Math.max(0, Math.min(parentCanvas.clientHeight - size, y))}px`;
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
      console.log("in ani-B -teamB");
    
  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
      console.log("in ani-C -teamB");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("b-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log(e);
        console.log("b-up");
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
   function aniD(parentCanvas) {
    console.log("in ani-D -teamB");
    }
}
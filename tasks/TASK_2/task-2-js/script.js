window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 

/* 1: all paragraph elements */
/***CODE */
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);
/***OUTPUT: 
 * NodeList(9)0: p#11: p#2.img-descript2: p#3.img-descript3: p#4.img-descript4: p#5.img-descript5: p#6.img-descript6: p#7.img-descript7: p#8.img-descript8: p#9.img-descriptlength: 9[[Prototype]]: NodeList

 */


/*************************************** */
/* 2: only the first paragraph element */
/***CODE */ 
const firstParagraph = document.querySelector("p");
console.log(firstParagraph);
/***OUTPUT: 
 *  <p id="1"> 
 * "Lorem ipsum dolor sit amet ..." 
 * <pp style="background: green; color; white;">using create Element
 *   </p>
 * </p>

 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */
const innerContainersAccess = document.querySelectorAll(".inner-container");
console.log(innerContainersAccess);
/***OUTPUT: 
NodeList(8) [div.inner-container, div.inner-container, 
div.inner-container, div.inner-container, div.inner-container, div.inner-container, 
div.inner-container, div.inner-container] 
*/


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */
const allImgInsideContainers = document.querySelectorAll(".img-container img");
const lastImgInImgContainer =
allImgInsideContainers[allImgInsideContainers.length - 1];
console.log(lastImgInImgContainer);
/*** OUTPUT:
 * <img class="img-image" src="task-2-images/seventeen.png">
*/


/*************************************** */
/* 5A: all h2 elements */
/* 5B: length of the list in 5A */
/* 5C: the text content of the first element in the list from 5A */
/***CODE */
const allH2s = document.querySelectorAll("h2");
console.log(allH2s);
console.log(allH2s.length);
console.log(allH2s[0].textContent);
/***OUTPUT: 
 * NodeList [h2]
 * 0: h2length: 1
 * [[Prototype]]: NodeList
 */


/*************************************** */
/* 6: the element with id name parent */
/***CODE */
const parentElement = document.getElementById("parent");
console.log(parentElement);
/***OUTPUT: 
 * <section id="parent">
 *  <div class="inner-container">
 *     <div class="content-container"> ... </div>
 *   </div>
 *  <div class="inner-container"> ... </div>
 *  <div class="inner-container"> ... </div>
 * .
 * .
 * .
 * </section>
 */

/*************************************** */
/*** END PART ONE ACCESS */ 


/*************************************** */
/*** START PART TWO MODIFY */ 
/*************************************** */

/* 1: Select the first paragraph and replace the text within the paragraph... */
/***CODE  */
const p1 = document.querySelector("p")
p1.textContent =
    "New text in paragraph one: text changed by YEJIN on the following date: " +
    new Date().toDateString();

/*************************************** */
/* 2: Select all elements in the HTML that have the class name content-container
 and change the background color ... of first and second ...*/
/***CODE */
const contentContainers = document.querySelectorAll(".content-container");
contentContainers[0].style.background = "orange";
contentContainers[1].style.background = "purple";

/*************************************** */
/* 3: Change the src element of the first image element on the page to be ...
/***CODE */
const firstImg = document.querySelector("img");
firstImg.src = "task-2-images/seven.png";

/*************************************** */
/* 4: Select the third paragraph element on the page and 
replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
/***CODE */
const thirdP = document.querySelectorAll("p")[2];
thirdP.innerHTML = "<h2>TEST 123</h2>";

/*************************************** */
/* 5: Select the fourth paragraph element on the page and 
add to the existing content an h2 element containing the text `TEST 123`
/***CODE */
const fourthP = document.querySelectorAll("p")[3];
const h2new = document.createElement("h2");  
h2new.textContent = "TEST 123";
fourthP.appendChild(h2new);

/*************************************** */
/* 6: Select the fifth paragraph element on the page and add to the existing content 
an img element that holds `one.png`, and add the class newStyle to said paragraph element.
/***CODE */
const fifthP = document.querySelectorAll("p")[4];
const img = document.createElement("img");
img.src = "task-2-images/one.png";
fifthP.appendChild(img);
fifthP.classList.add("newStyle");

/*************************************** */
/* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
then access all elements with class name inner-container and save to a variable called `innerContainers`. 
Next, iterate over the colors array, and for each color: 
assign the element from innerContainers variable with the same index 
(i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
a background using that color.
/***CODE */
let colors = ['red','blue','green','orange'];
let innerContainers = document.querySelectorAll(".inner-container");

colors.forEach((color, index) => {
    if(innerContainers[index]){
      innerContainers[index].style.background = color;
    }
  });


/*************************************** */
/*** END PART TWO MODIFY */ 


/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
const allPTagsThree = document.querySelectorAll("p");

/* 1B: Create a function:function customCreateElement(parent){ //body } */
function customCreateElement(parent){
/* 1C:  In the body of customCreateElement create a new parargraph element*/
const newP = document.createElement("p");
/* 1D:  Set the text of this element to be : `using create Element`*/
newP.textContent = "using create Element";
/* 1E:  Set the background of this paragraph element to be green */
newP.style.background = "green";
/* 1F:  Set the color of the text in this paragraph element to be white */
newP.style.color = "white";
/* 1G: Append this new element to the parent variable within the function. */
parent.appendChild(newP);
}
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */
allPTagsThree.forEach(p => {
    customCreateElement(p);
});

/***EXPLANATION::
 * A new green paragraph is added inside every exisiting paragraph.
 * each new paragraph contains the text "using create Element"
 */

/*************************************** */
/* 2: GRID OF BOXES */
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
function customNewBoxCreate(parent){   
//2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
    const div = document.createElement("div");
    div.classList.add("testDiv");
//2C:Then append this new element to the parent variable within the function. 
    parent.appendChild(div);
/* 2D:Finally, return</code> this new element */
    return div;
 }
const grid = document.getElementById("new-grid");

/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
  for(let row = 0; row < 10; row++){
    for(let col = 0; col < 10; col++){
      // create a new div
      const returnedDiv = customNewBoxCreate(grid);

/*2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions. */
returnedDiv.style.left = col * 40 + "px";
returnedDiv.style.top = row * 40 + "px";

/* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/
/***CODE */
if(row % 2 === 0){
        returnedDiv.style.background = "white";
        returnedDiv.textContent = "EVEN";
      } else {
        returnedDiv.style.background = "purple";
        returnedDiv.textContent = "ODD";
      }
    }
  }

/***EXPLANATION::
 * This creates a 10x10 grid (100 divs).   
 * each div is positioned using left and top.
 * even rows are white and labelled EVEN.
 * odd rows are purple and labelled ODD.
*/

/*************************************** */
/* 3: GRID OF BOXES II */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
/* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
/* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. */
/*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

/***CODE */
const gridThree = document.getElementById("new-grid-three");

  for(let row = 0; row < 10; row++){
    for(let col = 0; col < 10; col++){
      const returnedDiv = customNewBoxCreate(gridThree);

      returnedDiv.style.left = col * 40 + "px";
      returnedDiv.style.top = row * 40 + "px";

      const remainder = col % 3;
      returnedDiv.textContent = remainder;

      if(remainder === 0){
        returnedDiv.style.background = "red";
      } else if(remainder === 1){
        returnedDiv.style.background = "orange";
      } else {
        returnedDiv.style.background = "yellow";
      }
    }
  }

/***EXPLANATION::
 * This creates another 10x10 grid.
 * each column is coloured based on col % 3:
 * 0 → red, 1 → orange, 2 → yellow.
 * each cell shows the remainder number.
 */

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
    




}
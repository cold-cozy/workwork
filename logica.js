// First, create the overlay element and set its CSS styles
let overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0,0,0,0.5)"; // semi-transparent black
overlay.style.zIndex = "1050"; // over the content of the page

// Next, append the overlay element to the body of the page

// Finally, add an event listener to the overlay element to close it when clicked
overlay.addEventListener("click", function() {
overlay.style.display = "none";
});

// First, create the outer container element and set its CSS styles
var container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.zIndex = "1060"; 

// Next, create the inner container element and set its CSS styles
var innerContainer = document.createElement("div");
innerContainer.style.display = "flex";
innerContainer.style.width = "90%"; // adjust as needed

// Then, create the three column elements and set their CSS styles
var column1 = document.createElement("div");
column1.style.flex = "1"; // grow to fill available space
column1.style.backgroundColor = "lightblue"; // for visual reference

var column2 = document.createElement("div");
column2.style.flex = "1"; // grow to fill available space
column2.style.backgroundColor = "lightgreen"; // for visual reference

var column3 = document.createElement("div");
column3.style.flex = "1"; // grow to fill available space
column3.style.backgroundColor = "lightpink"; // for visual reference

// Finally, append the column elements to the inner container element and the inner container element to the outer container element
innerContainer.appendChild(column1);
innerContainer.appendChild(column2);
innerContainer.appendChild(column3);
container.appendChild(innerContainer);

// Don't forget to append the outer container element to the body of the page or to a specific container element on the page
overlay.appendChild(container);
document.body.appendChild(overlay);
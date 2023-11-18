// Our JavaScript will set the style of the html
// First we will use document.querySelectorAll to
// get all the elements that match our selection.
// Then we will

// Declare the variable to hold our elements.
let elms;

// Select the elements we wish to change.
elms = document.querySelectorAll("h1");

// Loop through the elements and change them.
for (elm of elms) {
  elm.style.color = "red";
  elm.style.backgroundColor = "black";
  // TODO: set the backgroundColor;
}

// TODO: select and change the p tags
//       then loop through the elements and change them.
elms = document.querySelectorAll("p");
for (elm of elms) {
  elm.style.color = "burlywood";
  elm.style.backgroundColor = "maroon";
}

// TODO: select and change the span tags
//       then loop through the elements and change them.
elms = document.querySelectorAll("span");
for (elm of elms) {
  elm.style.color = "powderblue";
  elm.style.backgroundColor = "salmon";
}

// TODO: Go back to index.html and add
//       a class called "jump" to 10 elements.
//       These can be any elements you want.
//       For example: 2 h1 tags, 3 p tags, 5 span tags.

// TODO: select and change the elements with a .jump class
// Set the style of each jump so that the element moves up 10px on the page.
// HINT: You can try...
//       elm.style.position = "relative"
//       elm.style.top = "-10px"
elms = document.querySelectorAll(".jump");
function oneJump(e) {
  elm = e.target;
  elm.style.position = "relative";
  elm.style.top = "-10px";
  elm.style.color = "skyblue";
  elm.style.backgroundColor = "midnightblue";
}

for (jump of elms) {
  jump.onclick = oneJump;
}
function fadeOut() {
  const country = document.getElementById("country1");
  country.style.opacity = 0;
}

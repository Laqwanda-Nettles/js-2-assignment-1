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
let places;
places = document.querySelectorAll("p");
for (place of places) {
  place.style.color = "burlywood";
  place.style.backgroundColor = "maroon";
}

// TODO: select and change the span tags
//       then loop through the elements and change them.
let countries;
countries = document.querySelectorAll("span");
for (country of countries) {
  country.style.color = "powderblue";
  country.style.backgroundColor = "salmon";
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
let cities;
cities = document.querySelectorAll(".jump");
for (city of cities) {
  city.style.position = "relative";
  city.style.top = "-10px";
}

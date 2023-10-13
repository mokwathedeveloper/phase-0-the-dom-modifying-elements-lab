// Write your code here!
// Create a div element


const element = document.createElement("div");

// Append the div element to the body

document.body.append(element);

// Create an unordered list

const ul = document.createElement("ul");

// Append list items to the unordered list
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the unordered list to the div element
element.append(ul);

// Change the style of the div element
element.style.height = "300px";
element.style.backgroundColor = "#27647B";

// Change the text content of the div element
element.textContent = "You've changed what's on the screen!";

// Change the style properties of the div element
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

// Add classes to the div element using className
element.className = "pet-listing dog";

// Add and remove classes from the div element using classList
element.classList.remove("dog");
element.classList.add("cat", "sale");

// Remove a specific child element from the unordered list
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Remove the unordered list from the div element
ul.remove();
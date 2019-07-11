/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuDiv = document.createElement("div");
menuDiv.classList.add('menu');
const articlesDiv = document.querySelector(".articles");
const parent = articlesDiv.parentNode;
parent.insertBefore(menuDiv, articlesDiv);
const ul = document.createElement("ul");
menuDiv.appendChild(ul);

const createItem = data => {
  const li = document.createElement("li");

  li.textContent = data;

  return li;
};

menuItems.forEach(data => {
  ul.appendChild(createItem(data));
});

const toggleMenu = () => {
    menuDiv.classList.toggle('menu--open');
    // Toggle the "menu--open" class on your menu refence. 
    articlesDiv.classList.toggle('menu--shift');
    // articleDiv.forEach(article => {article.classList.toggle('menu--shift-art')})
}

const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
const articleDiv = document.querySelectorAll('.article')


// menuButton.addEventListener('click', toggleMenu());
menuButton.addEventListener('click', () => toggleMenu());

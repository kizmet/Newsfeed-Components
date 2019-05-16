const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    // Toggle the "menu--open" class on your menu refence. 
    articlesDiv.classList.toggle('menu--shift');
    // articleDiv.forEach(article => {article.classList.toggle('menu--shift-art')})
}


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class

const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
const articlesDiv = document.querySelector('.articles')
const articleDiv = document.querySelectorAll('.article')


// menuButton.addEventListener('click', toggleMenu());
menuButton.addEventListener('click', () => toggleMenu());
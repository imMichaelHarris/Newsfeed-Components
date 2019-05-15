
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  menu.classList.contains('menu--open') ? TweenMax.to('.menu', .3, {left:0}) : TweenMax.to('.menu', .3, {left:-360});
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

function closeMenu(){
  if(menu.classList.contains('menu--open')){
    menu.classList.remove('menu--open');
    TweenMax.to('.menu', .3, {left:-360});
  } 
}

const articleBox = document.querySelector('.articles');
articleBox.addEventListener('click', closeMenu);
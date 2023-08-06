import homePage from './home.js'
import aboutPage from './about.js'
import menuPage from './menu.js'

const headder = document.createElement('div');
headder.classList = '.header';

const title = document.createElement('h1');
title.innerText = 'This is my generated title';

const contentContainer = document.body.querySelector('.content-container')
headder.appendChild(title);
contentContainer.appendChild(headder);

const nav = document.createElement('nav');
nav.appendChild(document.createElement('ul'));

const home = document.createElement('li');
home.innerText = 'Home';
const menu = document.createElement('li');
menu.innerText = 'Menu';
const about = document.createElement('li');
about.innerText = 'About';

nav.firstChild.appendChild(home);
nav.firstChild.appendChild(menu);
nav.firstChild.appendChild(about);
headder.appendChild(nav);

let currentPage = homePage(); // Landing page
contentContainer.appendChild(currentPage);

about.addEventListener('click',() => {
    contentContainer.removeChild(currentPage);
    currentPage = aboutPage();
    contentContainer.appendChild(currentPage);
})

home.addEventListener('click',() => {
    contentContainer.removeChild(currentPage);
    currentPage = homePage();
    contentContainer.appendChild(currentPage);
})
menu.addEventListener('click',() => {
    contentContainer.removeChild(currentPage);
    currentPage = menuPage();
    contentContainer.appendChild(currentPage);
})




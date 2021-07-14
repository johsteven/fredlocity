// variables
const toggleBar = document.querySelector('.toggle-bar');
const navbarNav = document.querySelector('.navbar-nav');

window.addEventListener('load', initApp);

// init
function initApp() {
    eventBindings();
}

// functions
function toggleNav() {
    navbarNav.classList.toggle('collapse');
}

// event bindings
function eventBindings() {
    toggleBar.addEventListener('click', toggleNav);
}
Burger = document.querySelector('.burger')
navBar = document.querySelector('.navbar')

Burger.addEventListener('click', ()=>{
    navBar.classList.toggle('h-nav-resp');
    navBar.classList.toggle('v-nav-resp');
})
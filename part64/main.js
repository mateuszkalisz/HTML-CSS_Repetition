const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.fa-bars');
const burgerX = document.querySelector('.fa-times');
const aside = document.querySelector('aside');


burger.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active');
    burgerX.classList.toggle('active');
    aside.classList.toggle('asideMenu');
})
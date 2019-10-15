const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.fa-bars');
const burgerX = document.querySelector('.fa-times');
const aside = document.querySelector('aside');
const wrapper = document.querySelector('.wrapper');


burger.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active');
    burgerX.classList.toggle('active');
    aside.classList.toggle('active');
    wrapper.classList.toggle('active');
})
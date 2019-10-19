//WERSJA JQUERY

// $('button').on('click', function(){
//     $('.modal-wrap').addClass('active');
//     $('.article').addClass('blur');
// })

// $('.modal span').on('click', function(){
//     $('.modal-wrap').removeClass('active');
//     $('.article').removeClass('blur');
// })

//short version

// $('button, .modal span').on('click', function(){
//     $('.modal-wrap').toggleClass('active');
//     $('.article').toggleClass('blur');
// })

//WERSJA JAVASCRIPT

// document.querySelector("button").addEventListener("click", ()=>{
//     document.querySelector(".modal-wrap").classList.add("active");
//     document.querySelector(".article").classList.add("blur");
// })

// document.querySelector(".modal span").addEventListener("click", ()=>{
//     document.querySelector(".modal-wrap").classList.remove("active");
//     document.querySelector(".article").classList.remove("blur");
// })

//short version

let items = document.querySelectorAll("button, .modal span");

items = [...items];

const toggleItems = function (){
    document.querySelector(".modal-wrap").classList.toggle("active");
    document.querySelector(".article").classList.toggle("blur");
}

// for(i=0; i<items.length; i++){
//     items[i].addEventListener("click", toggleItems);
// }

items.forEach(item => item.addEventListener("click", toggleItems));
const $orange = $('.orange');
const $green = $('.green');
const $plus = $('.plus');
const $move = $('.move');

const $bg = $('body');
const $text = $('.text');

let size = 150;

// let position = 50;
// let spacing = 1;

$('.interface').on('click', function(){
    if($(this).hasClass('orange')){
        $bg.css('background-color', 'orange');
    }
    else if($(this).hasClass('green')){
        $bg.css('background-color', 'green');
    }
    else if($(this).hasClass('plus')){
        $text.css('font-size', `${size+=10}px`);
    }
    else if($(this).hasClass('move')){
        $text.animate({
            'left':'+=200',
            'letter-spacing': '+=10',
        },500)
    }
})




// $orange.on('click', ()=>{
//     $bg.css('background-color', 'orange');
// })

// $green.on('click', ()=>{
//     $bg.css('background-color', 'green');
// })

// $plus.on('click', ()=>{    
//     $text.css('font-size', `${size+=10}px`);
// })

// $move.on('click', ()=>{
//     $text.css({
//         left: `${position+=5}%`,
//         letterSpacing: `${spacing+=5}px`
//     });

// })
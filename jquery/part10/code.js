$(document).on('scroll', function(){

    const scrollBottom = $(this).scrollTop() + $(window).height();
    console.log(scrollBottom);


    const $art1 = $('.art1');
    const $art1FromTop = $art1.offset().top;
    const $art1Height = $art1.height();

    const $art2 = $('.art2');
    const $art2FromTop = $art2.offset().top;
    const $art2Height = $art2.height();

    const $art3 = $('.art3');
    const $art3FromTop = $art3.offset().top;
    const $art3Height = $art3.height();

    const $art4 = $('.art4');
    const $art4FromTop = $art4.offset().top;
    const $art4Height = $art4.height();

    const $op1 = $('.op1');
    const $op1FromTop = $op1.offset().top;
    const $op1Height = $op1.height();

    const $op2 = $('.op2');
    const $op2FromTop = $op2.offset().top;


    if(scrollBottom > $art1FromTop){
        $art1.addClass('active');
    }

    if(scrollBottom > ($art2FromTop+$art1Height)){
        $art2.addClass('active');
    }

    if(scrollBottom > ($art3FromTop+$art2Height)){
        $art3.addClass('active');
    }

    if(scrollBottom > ($art4FromTop+$art3Height)){
        $art4.addClass('active');
    }

    if(scrollBottom > ($op1FromTop+$art4Height/3)){
        $op1.addClass('active');
    }

    if(scrollBottom > ($op2FromTop+$op1Height/5)){
        $op2.addClass('active');
    }

})

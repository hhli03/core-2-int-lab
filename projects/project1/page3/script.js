console.log('loaded');
$(document).ready(function(){

    $('#highlight1').hover(function(){
        console.log('hover');
        $('.red1').toggleClass('active');
    });

    $('#highlight2').hover(function(){
        console.log('hover');
        $('.red2').toggleClass('active');
    });

    $('#highlight3').hover(function(){
        console.log('hover');
        $('.red3').toggleClass('active');
    });
});
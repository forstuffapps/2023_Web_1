

$(document).on("keypress", function(event){
    $('h1').text(event.key);
});



$("h1").slideUp().slideDown().animate({opacity:0.5});




$(document).ready(function(){
    
$(function(){$('.AboutMe').hide();})





    
$('.life').click(function () {
    
     $('.AboutMe').slideToggle("slow","swing");
         
         
         
    
       $('html, body').animate({scrollTop: $('#aboutMe').offset().top-135}, 1000); 
    $(".life").removeAttr("href");
    });
    
    $('.life1').click(function () {
       $('html, body').animate({scrollTop: $('.object').offset().top-135}, 1000); 
    });
    
    
    
     /*navigation scroll*/ 
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-135
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
            
	    });
	});
    
     /* Mobile navigation */
    $('.nav-icon').click(function() {
        var nav = $('.main-nav');
        var icon = $('.nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
    
});
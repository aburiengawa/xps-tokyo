jQuery(document).ready(function($){
	//create the slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: true,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	//open the testimonials modal page
	$('.cd-see-all').on('click', function(){
		$('.cd-testimonials-all').addClass('is-visible');
	});

	//close the testimonials modal page
	$('.cd-testimonials-all .close-btn').on('click', function(){
		$('.cd-testimonials-all').removeClass('is-visible');
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
    		$('.cd-testimonials-all').removeClass('is-visible');	
	    }
    });
    
	//build the grid for the testimonials modal page
	$('.cd-testimonials-all-wrapper').children('ul').masonry({
  		itemSelector: '.cd-testimonials-item'
	});

	//build the grid for the services section on the front page
	$('.services-wrapper').children('ul').masonry({
  		itemSelector: '.services-item'
	});

	/* mobile navigation - hamburger */
    var nav = $('.nav-ul');
    var icon = $('.js--nav-icon i');
    
    $('.js--nav-icon').click(function(){
        nav.slideToggle(200);
        switchMobileIcon(icon);
    });
    
    //hides links on stick nav after clicking a link
    // $('.js--main-nav a').click(function(){
    //     if ($(window).width() < 600){
    //         nav.slideToggle(200);
    //     }
    //     switchMobileIcon(icon);
    // });
    
    //brings back desktop nav when resized back
    // $(window).resize(function(){
    //     if ($(window).width() > 599){
    //         nav.css("display", "block");
    //         switchToClose(icon);
    //     } else {
    //         nav.css("display", "none");
    //         switchToNavicon(icon);
    //     }
    // });
});

function switchMobileIcon (icon) {
    if (icon.hasClass('fa-bars')) {
        switchToClose(icon);
    } else {
        switchToNavicon(icon);
    }
}

function switchToClose (icon) {  
    icon.addClass('fa-times-circle-o');
    icon.removeClass('fa-bars');   
}

function switchToNavicon (icon) {  
    icon.addClass('fa-bars');
    icon.removeClass('fa-times-circle-o');  
}
var zero=0;
$(document).ready(function(){
           // Add smooth scrolling to all links
           $("a").on('click', function(event) {

             // Make sure this.hash has a value before overriding default behavior
             if (this.hash !== "") {
               // Prevent default anchor click behavior
               event.preventDefault();

               // Store hash
               var hash = this.hash;

               // Using jQuery's animate() method to add smooth page scroll
               // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
               $('html, body').animate({
                 scrollTop: $(hash).offset().top
               }, 800);
             } // End if
           });
			//slide top button
           $(window).scroll(function(){
                     if($(this).scrollTop()>40)
                     {
                        $('#nav_up').fadeIn();
                     }
                     else
                     {
                        $('#nav_up').fadeOut();
                     }
                  });
				  
      $(function() {
            $('#nav_up').click(
               function (e) {
                  $(window).scroll(function(){
                     if($(this).scrollTop()>40)
                     {
                        $('#nav_up').fadeIn();
                     }
                     else
                     {
                        $('#nav_up').fadeOut();
                     }
                  });
                  e.preventDefault();
                  $('html, body').animate({scrollTop: '0px'}, 900);
               }
            );
            });
			
			//navbar show hide in scroll
			$(window).on('scroll',function(){
				$('.navbar').toggleClass('hide',$(window).scrollTop()>zero);
				zero=$(window).scrollTop();
			});
         });
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})

//sound effect
var sound= new Audio();
   sound.src="sound.wav";

		
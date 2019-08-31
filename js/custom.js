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
         });
      
		
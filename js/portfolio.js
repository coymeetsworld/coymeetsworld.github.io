$(document).ready(function() {

  /* For smooth scrolling when clicking on internal links in navbar. */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  var scroll_start = 0;
  var startchange = $('#about');
  var offset = startchange.offset();
  if (startchange.length) { /* needed */
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("#header").css('background-color', 'rgba(240,240,240,1)');
          $("#whoami").css('color', '#111');
          $("#navbar a").css('color', '#fff');
          $("#navbar a").css('background-color', 'rgba(0,0,0,0.8)');
          $("#navbar a").hover(
            function () {
              $(this).css("background-color","rgba(235,112,160,1)");
            },
            function () {
              $(this).css('background-color', 'rgba(0,0,0,0.8)');
            }
          );


       } else {
          $('#header').css('background-color', 'rgba(0,0,0,0.8)');
          $("#whoami").css('color', '#fff');
          $("#navbar a").css('color', '#fff');
          $("#navbar a").css('background-color', 'rgba(200,200,200,.1)');
          $("#navbar a").hover(
            function () {
              $(this).css("background-color","rgba(235,112,160,1)");
            },
            function () {

              $(this).css('background-color', 'rgba(200,200,200,.1)');
            }
          );


       }
   });
  }
});

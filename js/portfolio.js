$(document).ready(() => {

  /* For smooth scrolling when clicking on internal links in nav-bar. */
  $('a[href*="#"]:not([href="#"])').click(function() {

    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);

        return false;
      }
    }
  });


  let scroll_start = 0;
  let startchange = $('#about');
  let offset = startchange.offset();

  if (startchange.length) { /* needed */

    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $("#header").css('background-color', 'rgba(240,240,240,1)');
        $("#whoami").css('color', '#111');
        $("#nav-bar a").css('color', '#fff');
        $("#nav-bar a").css('background-color', 'rgba(0,0,0,0.8)');
        $("#nav-bar a").hover(
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
        $("#nav-bar a").css('color', '#fff');
        $("#nav-bar a").css('background-color', 'rgba(200,200,200,.1)');
        $("#nav-bar a").hover(
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

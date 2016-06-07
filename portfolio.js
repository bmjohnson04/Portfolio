//Auto Scroll

$(function AutoScroll() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace() == this.pathname.replace() && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;

        }
      }

    });
  });

//Sticky Nav

$(window).scroll(function(event) {
    var sticky = $('header');
    scroll = $(window).scrollTop();
    if (scroll >= 60) {
      sticky.addClass('fixed');
    } else {
      sticky.removeClass('fixed');
    }
  });
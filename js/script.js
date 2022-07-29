if($(window).width() > 992) {
    $('.navbar-nav .nav-item.dropdown .nav-link').each(function() {
  $(this).hover(function() {
        $('.navbar-nav .nav-item.dropdown .nav-drop-menu.'+this.id+'').slideToggle();
        // console.log($(".navbar-nav .nav-item.dropdown .nav-drop-menu."+this.id+''));
    });
});
} else if($(window).width() <= 992) {
    $('.navbar-nav .nav-item.dropdown .click-mobile span').each(function() {
      $(this).on( 'click' ,function() {
        $(this).toggleClass("down");
        $('.navbar-nav .nav-item.dropdown .nav-drop-menu.'+this.id+'').slideToggle();
      });
    });
}

$(document).scroll(function () {
    var $nav = $(".navbar");
    var headheight = $('.site-header').height();
    var navheight = $('.navbar').height();
    var total = headheight + navheight;
    $nav.toggleClass('fixed-top', $(this).scrollTop() > total);
  });

var subtnheight = $('#news-form').height();
$('.sub-btn').css('height' , subtnheight);
//$(document).ready(function(){
  //$('.bxslider').bxSlider();
//});

jQuery(document).ready(function($){
  jQuery(document).ready(function(){
      $('.bxslider').bxSlider({
        mode: 'fade',
        speed: 2000,
        infiniteLoop: true,
        auto: true,
        pager: false,
        controls: false
      });
      $('.list').magnificPopup({
        delegate: 'a',
        type: 'inline',
        preloader: false,
        gallery: { //ギャラリー表示にする
          enabled:true
        }
      });
      $(document).on('click', '.close-modal', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
      $(window).fadeThis();
      $('a[href^="#"]' + 'a:not(.intro-cell)').click(function() {
         var speed = 800;
         var href= $(this).attr("href");
         var target = $(href == "#" || href == "" ? 'html' : href);
         var position = target.offset().top;
         $('body,html').animate({scrollTop:position}, speed, 'swing');
         return false;
      });
  });
})

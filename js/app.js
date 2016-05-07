$(function(){

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);

    $('.logo').css({'transform': 'translate(0px, '+ scrollTop /2 +'%)'});
    $('.back-leaf').css({'transform': 'translate(0px, '+ scrollTop /4 +'%)'});
    $('.tree').css({'transform': 'translate(0px, -'+ scrollTop /40 +'%)'});
  });


});

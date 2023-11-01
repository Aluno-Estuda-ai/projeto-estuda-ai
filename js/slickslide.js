$(function(){

  function atualiza_nome() {
    $("#slidetitle").text($(".slick-center").data("name"));
  }

  $(".center-slide").on('init', function(){
    atualiza_nome();
  });

  $(".center-slide").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  //   responsive: [
  //     {
  //       breakpoint: 1999,
  //       settings: {
  //         slidesToShow: 1,
  //         adaptiveHeight: false,
  //       }
  //   }
  // ]
  });

  $(".center-slide").on('afterChange', function(){
    atualiza_nome();
  });

})
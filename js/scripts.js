$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 500) {
    $(".cabecalho").css("background-color", "rgba(0,0,0,.50)");
    $(".cabecalho").css("transition", "background-color .2s ease-in-out");
  } else {
    $(".cabecalho").css("background-color", "rgba(0,0,0,100)");
    $(".cabecalho").css("transition", "background-color .2s ease-in-out");
  }
});

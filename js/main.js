$(function () {

  // Fixed header
  let header__top = $('#header__top');
  let header__content = $('#header__content');
  let header__contentH = header__content.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on('scroll load ', function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > header__contentH) {
      header__top.addClass('fixed');
    } else {
      header__top.removeClass('fixed');
    }

  });

  // Smooth scroll
  $(".nav a, .logo, .header__link, .footer__logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top - 70
    }, 1500);
  });

  $('.nav__btn, .nav a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active')
  });

  $('.slider-blog__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 2000
  });


  $(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
      if (!show) return false;
      var w_top = $(window).scrollTop();
      var e_top = $(countbox).offset().top;
      var w_height = $(window).height();
      var d_height = $(document).height();
      var e_height = $(countbox).outerHeight();
      if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.benefits__number').css('opacity', '1');
        $('.benefits__number').spincrement({
          thousandSeparator: "",
          duration: 3000
        });
        show = false;
      }
    });

  });

  $(document).ready(function () {
    var show = true;
    var countbox = ".pricing__inner";
    $(window).on("scroll load resize", function () {
      if (!show) return false;
      var q_top = $(window).scrollTop();
      var o_top = $(countbox).offset().top;
      var q_height = $(window).height();
      var t_height = $(document).height();
      var o_height = $(countbox).outerHeight();
      if (q_top + 800 >= o_top || q_height + q_top == t_height || o_height + o_top < q_height) {
        $('.price').css('opacity', '1');
        $('.price').spincrement({
          thousandSeparator: "",
          duration: 3000
        });
        show = false;
      }
    });
  });

  let mixer = mixitup('.gallery__content', {
    animation: {
      effects: 'fade stagger(100ms)',
      staggerSequence: function (i) {
        return (2 * i) - (5 * ((i / 3) - ((1 / 3) * (i % 3))));
      }
    }
  });


});
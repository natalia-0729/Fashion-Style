$(function(){
  $('.services__inner').slick({
    prevArrow: false,
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Стрелка вправо"></button>',
  });
  $('.comment__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Стрелка влево"></button>',
    nextArrow: '<button type="button" class="slick-next slick-next__comment"><img src="images/arrow-right.svg" alt="Стрелка вправо"></button>',
  });
  $('.team__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Стрелка влево"></button>',
    nextArrow: '<button type="button" class="slick-next slick-next__comment"><img src="images/arrow-right.svg" alt="Стрелка вправо"></button>',
  });

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

});
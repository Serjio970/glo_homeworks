$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');


      modalBtn.on('click', function () {
      modal.toggleClass('modal--visible');
  });
      closeBtn.on('click', function () {
      modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true, 
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-next');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  // Dfkbдация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // правило-объект
      userEmail: {
        required: true,
        email: true
        }
      },
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв"
        },
        userPhone: "Телефон обязателен",
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате: name@domain.com"
        }
      }
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

});

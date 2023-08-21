import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './modules/header';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  const hero = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 1,
    // spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: '.hero__pagination',
    },

    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
  });

  const tours = new Swiper('.tours__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1340: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.tours__next',
      prevEl: '.tours__prev',

    },
  });

  // Modules

  // video

  const video = document.querySelector('.hero__video-button');
  const heroVideo = document.querySelector('.hero__media--video');


  video.addEventListener('click', () => {
    if (video.classList.contains('video-is-active')) {
      return;
    }

    video.classList.add('video-is-active');

    const src = heroVideo.dataset.src;

    heroVideo.insertAdjacentHTML('afterbegin', '<iframe width="560" height="315" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  });
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

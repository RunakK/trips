import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './modules/header';
/* eslint-disable */
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
      type: 'bullets',
      clickable: true,
    },
    centeredSlides: true,

    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
  });

  const tours = new Swiper('.tours__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
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


  const instructors = new Swiper('.instructors__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      1300: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.instructors__next',
      prevEl: '.instructors__prev',

    },
  });


  const reviews = new Swiper('.reviews__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1.25,
        spaceBetween: 30,
      },

      // when window width is >= 1200px
      1200: {
        slidesPerView: 1.62,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',

    },
  });

  let features = null;
  const mediaQuerySize = 1200;

  function featuresInit() {
    if (!features) {
      features = new Swiper('.features__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        initialSlide: 2,

        breakpoints: {
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3.6,
            spaceBetween: 30,
          },
        },

        navigation: {
          nextEl: '.features__next',
          prevEl: '.features__prev',

        },
      });
    }
  }

  function featuresDestroy() {
    if (features) {
      features.destroy();
      features = null;
    }
  }

  const width = window.innerWidth;

  if (width >= mediaQuerySize) {
    featuresInit();
  }

  window.addEventListener('resize', function () {
  // Берём текущую ширину экрана
    const windowWidth = window.innerWidth;

    // Если ширина экрана меньше или равна mediaQuerySize(1200)
    if (windowWidth <= mediaQuerySize) {
    // Уничтожить слайдер если он был инициализирован
      featuresDestroy();
    } else {
    // Инициализировать слайдер если он ещё не был инициализирован
      featuresInit();
    }
  });

  const gallery = new Swiper('.gallery__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 3,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        spaceBetween: 3,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },

      // when window width is >= 1200px
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },
    },

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',

    },
  });


  // Карта

  const map = L.map('map').setView([55.774836, 37.632664], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

var greenIcon = L.icon({
  iconUrl: './img/svg/pin_filled.svg',
  iconSize:     [48, 48], // size of the icon
});

// var marker = L.marker([51.5, -0.09]).addTo(map);

L.marker([55.774836, 37.632664], {icon: greenIcon}).addTo(map);


  // Modules

  // video

  // const video = document.querySelector('.hero__video-button');
  // const heroVideo = document.querySelector('.hero__media--video');


  // video.addEventListener('click', () => {
  //   if (video.classList.contains('video-is-active')) {
  //     return;
  //   }

  //   video.classList.add('video-is-active');

  //   const src = heroVideo.dataset.src;

  //   heroVideo.insertAdjacentHTML('afterbegin', '<iframe width="560" height="315" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  // });

  // const video = document.querySelector('.hero__video-button');
  // const aboutVideo = document.querySelector('.hero__media--video');


  // video.addEventListener('click', () => {
  //   if (video.classList.contains('video-is-active')) {
  //     return;
  //   }

  //   video.classList.add('video-is-active');

  //   const src = aboutVideo.dataset.src;

  //   aboutVideo.insertAdjacentHTML('afterbegin', '<iframe width="560" height="315" src="https://www.youtube.com/embed/9TZXsZItgdw?si=1MVZQrqQ3fx1Ot5N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  // });

  const video = document.querySelector('.hero__video-button');
  const mediaBlock = document.querySelector('.hero__video');

    video.addEventListener('click', function () {

      if(video.classList.contains('is-active')) {
          return;
        }

      video.classList.add('is-active');

      // mediaBlock.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?si=1MVZQrqQ3fx1Ot5N?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen allow="autoplay"></iframe>')
      mediaBlock.insertAdjacentHTML('afterbegin', '<iframe width="560" height="315" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>')
  })

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

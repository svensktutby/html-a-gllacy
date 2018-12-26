(function () {
  /**************** Promo slider ***************/
  var page = document.querySelector('.page');
  var bgPage = page.querySelector('.page-wrapper--index');
  var slides = document.querySelectorAll('.promo-slider__item');
  var btnSlides = document.querySelectorAll('.promo-slider__control');
  var colors = ['#849d8f', '#8996a6', '#9d8b84'];
  var slideIndex = 0;
  toggleSlides(slideIndex);

  if (btnSlides) {
    for (var i = 0; i < btnSlides.length; i++) {
      currentBtn(i);
    }
  }

  function currentBtn(n) {
    btnSlides[n].addEventListener('click', function (event) {
      event.preventDefault();
      currentSlide(n);
    });
  }

  function currentSlide(n) {
    toggleSlides(slideIndex = n);
  }

  function toggleSlides(n) {
    if (n > slides.length - 1) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slide.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
      var slide = slides[i];
      if (slide.classList.contains('promo-slider__item--current')) {
        slide.classList.remove('promo-slider__item--current');
      }
    }
    for (var i = 0; i < btnSlides.length; i++) {
      var btn = btnSlides[i];
      if (btn.classList.contains('promo-slider__control--current')) {
        btn.classList.remove('promo-slider__control--current');
      }
    }
    slides[slideIndex].classList.add('promo-slider__item--current');
    btnSlides[slideIndex].classList.add('promo-slider__control--current');
    page.style.backgroundColor = colors[slideIndex];
    bgPage.style.backgroundImage = 'url("./img/slider-bg-' + (slideIndex + 1) + '.png")';
  };

  /**************** Modal contacts ***************/
  var openFeedback = document.querySelector('.contacts__btn');
  var modalFeedback = document.querySelector('.modal-feedback');
  var closeFeedback = modalFeedback.querySelector('.modal-close');
  var modalOverlay = document.querySelector('.modal-overlay');

  if (modalFeedback) {
    var formFeedback = modalFeedback.querySelector('.modal-feedback__form');
    var userNameFeedback = formFeedback.querySelector('#user-name-feedback');
    var emailFeedback = formFeedback.querySelector('#email-feedback');
    var messageFeedback = formFeedback.querySelector('#message-feedback');

    openFeedback.addEventListener('click', function (event) {
      openFeedbackWindow();
    });

    closeFeedback.addEventListener('click', function (event) {
      closeFeedbackWindow();
    });

    modalOverlay.addEventListener('click', function (event) {
      closeFeedbackWindow();
    });

    window.addEventListener('keydown', function (event) {
      if (event.keyCode === 27) {
        closeFeedbackWindow();
      }
    });
  };
  
  function openFeedbackWindow() {
    event.preventDefault();
    if (!modalFeedback.classList.contains('modal-feedback--show') && !modalOverlay.classList.contains('modal-overlay--show')) {
      modalFeedback.classList.add('modal-feedback--show');
      modalOverlay.classList.add('modal-overlay--show');
      userNameFeedback.focus();
    }
  }
  function closeFeedbackWindow() {
    event.preventDefault();
    if (modalFeedback.classList.contains('modal-feedback--show') && modalOverlay.classList.contains('modal-overlay--show')) {
      modalFeedback.classList.remove('modal-feedback--show');
      modalOverlay.classList.remove('modal-overlay--show');
    }
  }
})();

(function () {
  /**************** Promo slider ***************/
  var page = document.querySelector('body');
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
      slideIndex = slides.length - 1;
    }
    for (var j = 0; j < slides.length; j++) {
      var slide = slides[j];
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
    page.style.transition = 'background-color 0.5s';
    bgPage.style.backgroundImage = 'url("./img/slider-bg-' + (slideIndex + 1) + '.png")';
  };

  /**************** Modal contacts ***************/
  var openFeedback = document.querySelector('.contacts__btn');
  var modalFeedback = document.querySelector('.modal-feedback');
  var formFeedback = modalFeedback.querySelector('.modal-feedback__form');
  var closeFeedback = modalFeedback.querySelector('.modal-close');
  var modalOverlay = document.querySelector('.modal-overlay');

  if (modalFeedback) {
    var userNameFeedback = formFeedback.querySelector('#user-name-feedback');
    var emailFeedback = formFeedback.querySelector('#email-feedback');
    var messageFeedback = formFeedback.querySelector('#message-feedback');
    var storageName = localStorage.getItem('userNameFeedback');
    var storageEmail = localStorage.getItem('emailFeedback');

    openFeedback.addEventListener('click', function (event) {
      event.preventDefault();
      openFeedbackWindow();
    });

    formFeedback.addEventListener('submit', function () {
      fillFieldsForm();
      errorFillForm();
    });

    closeFeedback.addEventListener('click', function (event) {
      event.preventDefault();
      closeFeedbackWindow();
    });

    modalOverlay.addEventListener('click', function () {
      closeFeedbackWindow();
    });

    window.addEventListener('keydown', function (event) {
      if (event.keyCode === 27) {
        closeFeedbackWindow();
      }
    });
  }

  function openFeedbackWindow() {
    if (!modalFeedback.classList.contains('modal-feedback--shown') && !modalOverlay.classList.contains('modal-overlay--shown')) {
      modalFeedback.classList.add('modal-feedback--shown');
      modalOverlay.classList.add('modal-overlay--shown');
      if (storageName && !storageEmail) {
        userNameFeedback.value = storageName;
        emailFeedback.focus();
      } else if (storageName && storageEmail) {
        userNameFeedback.value = storageName;
        emailFeedback.value = storageEmail;
        messageFeedback.focus();
      } else {
        userNameFeedback.focus();
      }
    }
  }

  function fillFieldsForm() {
    if (userNameFeedback.value || emailFeedback.value || messageFeedback.value) {
      localStorage.setItem('userNameFeedback', userNameFeedback.value);
      localStorage.setItem('emailFeedback', emailFeedback.value);
    }
  }

  function errorFillForm () {
    if(!userNameFeedback.value || !emailFeedback.value || !messageFeedback.value) {
      event.preventDefault();
      modalFeedback.classList.remove('modal-feedback--error');
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add('modal-feedback--error');
    }
  }

  function closeFeedbackWindow() {
    if (modalFeedback.classList.contains('modal-feedback--shown') && modalOverlay.classList.contains('modal-overlay--shown')) {
      modalFeedback.classList.remove('modal-feedback--shown');
      modalFeedback.classList.add('modal-feedback--hidden');
      modalOverlay.classList.remove('modal-overlay--shown');
      modalOverlay.classList.add('modal-overlay--hidden');
      setTimeout(function () {
        modalFeedback.classList.remove('modal-feedback--hidden');
        modalOverlay.classList.remove('modal-overlay--hidden');
      }, 450);
    }
  }

  /*function openFeedbackWindow() {
    event.preventDefault();
    fadeIn(1);
    if (storageName && !storageEmail) {
      userNameFeedback.value = storageName;
      emailFeedback.focus();
    } else if (storageName && storageEmail) {
      userNameFeedback.value = storageName;
      emailFeedback.value = storageEmail;
      messageFeedback.focus();
    } else {
      userNameFeedback.focus();
    }
  }
  function fillFieldsForm() {
    if (userNameFeedback.value || emailFeedback.value || messageFeedback.value) {
      localStorage.setItem('userNameFeedback', userNameFeedback.value);
      localStorage.setItem('emailFeedback', emailFeedback.value);
    }
  }
  function closeFeedbackWindow() {
    event.preventDefault();
    fadeOut(0);
  }

  var tIn, tOut;

  function fadeIn(x) {
    modalFeedback.style.display = 'block';
    modalOverlay.style.display = 'block';

    var op = (modalOverlay.style.opacity) ? parseFloat(modalOverlay.style.opacity) : 0;

    if (op < x) {
      clearInterval(tOut);
      op += 0.05;
      modalOverlay.style.opacity = op;
      modalFeedback.style.opacity = op;

      tIn = setTimeout(function() {
        fadeIn(x);
      }, 50);
    }
  }

  function fadeOut(x) {
    var op = (modalOverlay.style.opacity) ? parseFloat(modalOverlay.style.opacity) : 0;

    if (op > x) {
      clearInterval(tIn);
      op -= 0.05;
      modalOverlay.style.opacity = op;
      modalFeedback.style.opacity = op;

      tOut = setTimeout(function() {
        fadeOut(x);
      }, 50);
    }
    if (modalOverlay.style.opacity == x) {
      modalFeedback.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
  }*/
})();
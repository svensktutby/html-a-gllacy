(function () {
  /**************** Promo slider ***************/

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

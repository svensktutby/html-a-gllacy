var btnFeedback = document.querySelector('.contacts__btn');
var modalFeedback = document.querySelector('.modal-feedback');
var modalOverlay = document.querySelector('.modal-overlay');
var modalFeedbackClose = document.querySelector('.modal-close');
var userName = modalFeedback.querySelector('#user-name-feedback');

btnFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(!modalFeedback.classList.contains('modal-feedback--show')) {
    modalFeedback.classList.add('modal-feedback--show');
    modalOverlay.classList.add('modal-overlay--show');
    userName.focus();
  }
});

modalFeedbackClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(modalFeedback.classList.contains('modal-feedback--show')) {
    modalFeedback.classList.remove('modal-feedback--show');
    modalOverlay.classList.remove('modal-overlay--show');
  }
});

modalOverlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  if(modalFeedback.classList.contains('modal-feedback--show')) {
    modalFeedback.classList.remove('modal-feedback--show');
    modalOverlay.classList.remove('modal-overlay--show');
  }
});

window.onload = function () {
  var btnFeedback = document.getElementById('btn-feedback');
  var modalFeedback = document.querySelector('.modal-feedback');
  var modalOverlay = document.querySelector('.modal-overlay');
  var modalFeedbackClose = document.querySelector('.modal-close');

  btnFeedback.addEventListener('click', function (e) {
    e.preventDefault();
    if(!modalFeedback.classList.contains('modal-feedback--show')) {
      modalFeedback.classList.add('modal-feedback--show');
      modalOverlay.classList.add('modal-overlay--show');
    }
  });

  modalFeedbackClose.addEventListener('click', function () {
    if(modalFeedback.classList.contains('modal-feedback--show')) {
      modalFeedback.classList.remove('modal-feedback--show');
      modalOverlay.classList.remove('modal-overlay--show');
    }
  });
};
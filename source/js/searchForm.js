'use strict';

var searchFormButton = document.querySelector('.search-form__select-btn');
var searchVariantsModal = document.querySelector('.modal-menu');
var backgroundShader = document.querySelector('.bg-fade');

var onSearchFormButtonClick = function (evt) {
  evt.stopPropagation();
  searchVariantsModal.classList.toggle('modal-menu--show');
  backgroundShader.classList.toggle('bg-fade--hide');
  document.addEventListener('keydown', onEscKeyPress);
  document.addEventListener('click', onEmptyAriaClick);
};

var modalClose = function () {
  if (searchVariantsModal.classList.contains('modal-menu--show') && !(backgroundShader.classList.contains('bg-fade--hide'))) {
    searchVariantsModal.classList.remove('modal-menu--show');
    backgroundShader.classList.add('bg-fade--hide');
  }
}

var onEscKeyPress = function (evt) {
  if(evt.key === 'Escape' && searchVariantsModal.classList.contains('modal-menu--show')) {
    modalClose();
    document.removeEventListener('keydown', onEscKeyPress);
  }
};

var onLinkClick = function (evt) {
  if (evt.target.className.includes('modal__link')) {
    searchFormButton.value = evt.target.innerText;
    modalClose();
  }
};

var onEmptyAriaClick = function (evt) {
  if (!searchVariantsModal.contains(evt.target) && searchVariantsModal.classList.contains('modal-menu--show')) {
    searchVariantsModal.classList.remove('modal-menu--show');
    backgroundShader.classList.add('bg-fade--hide');
    document.removeEventListener('click', onEmptyAriaClick);
  }
}

searchFormButton.addEventListener('click', onSearchFormButtonClick);

document.addEventListener('keydown', onEscKeyPress);

searchVariantsModal.addEventListener('click', onLinkClick);

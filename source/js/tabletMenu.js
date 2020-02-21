'use strict';

var tabletMenu = document.querySelector('.page-header__service-drop-list');
var dropButton = document.querySelector('.page-header__service-link--drop');


var ondropButtonClick = function (evt) {
  evt.stopPropagation();
  tabletMenu.classList.toggle('page-header__service-drop-list--show');
  document.addEventListener('click', onEmptyAriaClick);
}

var onEmptyAriaClick = function (evt) {
  if (!tabletMenu.contains(evt.target) && tabletMenu.classList.contains('page-header__service-drop-list--show')) {
    tabletMenu.classList.remove('page-header__service-drop-list--show');
    document.removeEventListener('click', onEmptyAriaClick);
  }
}

dropButton.addEventListener('click', ondropButtonClick);

document.addEventListener('click', onEmptyAriaClick);

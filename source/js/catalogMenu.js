'use strict';

var MenuLinksColors = {
  NORMAL: '#041936',
  ACTIVE: '#e7445f'
};

var catalogMenu = document.querySelector('.page-header__main-menu');
var catalogItems = catalogMenu.querySelectorAll('.page-header__main-item');
var catalogOpenButtons = catalogMenu.querySelectorAll('.page-header__main-show');
var catalogSubMenu = catalogMenu.querySelectorAll('.page-header__sub-menu');
var catalogCloseButtons = catalogMenu.querySelectorAll('.page-header__main-close');
var catalogLinks = catalogMenu.querySelectorAll('.page-header__main-link');

catalogItems.forEach(function (item) {
  item.addEventListener('mouseenter', function (evt) {
    for(var i = 0; i < catalogItems.length; i++) {
      catalogItems[i].classList.remove('page-header__main-item--selected');
    }
    if (item === evt.currentTarget) {
      item.classList.add('page-header__main-item--selected');
    }
  });
});

var closeSubMenu = function (index) {
  catalogCloseButtons[index].style.display = 'none'
  catalogOpenButtons[index].style.display = 'block'
  catalogSubMenu[index].classList.remove('page-header__sub-menu--show');
  catalogLinks[index].querySelector('span').style.color = MenuLinksColors.NORMAL;
};

var onEmptyAreaClick = function (evt) {
  for (var i = 0; i < catalogSubMenu.length; i++) {
    if (!catalogMenu.contains(evt.target) && catalogSubMenu[i].classList.contains('page-header__sub-menu--show')) {
      closeSubMenu(i);
      document.removeEventListener('click', onEmptyAreaClick);
    }
  }
};

catalogOpenButtons.forEach(function (btn, index) {
  btn.addEventListener('click', function () {

    btn.style.display = 'none';

    catalogSubMenu[index].classList.toggle('page-header__sub-menu--show');
    catalogLinks[index].querySelector('span').style.color = MenuLinksColors.ACTIVE;

    for (var i = 0; i < catalogSubMenu.length; i++) {
      if (catalogCloseButtons[index] === catalogCloseButtons[i]) {
        catalogCloseButtons[i].style.display = 'block';
        catalogSubMenu[i].classList.add('page-header__sub-menu--show');
      } else {
        closeSubMenu(i);
      }
    }
    document.addEventListener('click', onEmptyAreaClick);
  });
});

catalogCloseButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    for (var i = 0; i < catalogSubMenu.length; i++) {
      closeSubMenu(i);
    }
  })
});

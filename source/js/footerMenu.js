'use strict';

var footerMenus = document.querySelectorAll('.page-footer__menu-list');

var footerMenuBtns = document.querySelectorAll('.page-footer__title');


footerMenuBtns.forEach(function (btn, index) {
  btn.addEventListener('click', function (evt) {
    footerMenus[index].classList.toggle('page-footer__menu-list--open');
    btn.classList.toggle('page-footer__title--active')
  })
});

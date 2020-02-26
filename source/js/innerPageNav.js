'use strict';

var innerPageMenus = document.querySelectorAll('.inner-page__sub-nav');
var innerPageMenuBtns = document.querySelectorAll('.inner-page__main-title');

innerPageMenuBtns.forEach(function (btn, index) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    innerPageMenus[index].classList.toggle('inner-page__sub-nav--show');
    btn.classList.toggle('inner-page__main-title--active')
  });
});

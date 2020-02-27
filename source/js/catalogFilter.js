'use strict';

var filterFieldButtons = document.querySelectorAll('.catalog__legend');
var filterFieldsets = document.querySelectorAll('.catalog__fieldset');

filterFieldButtons.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    if(btn.classList.contains('catalog__legend--open')) {
      btn.classList.remove('catalog__legend--open');
      filterFieldsets[index].classList.remove('catalog__fieldset--open');
    } else {
      btn.classList.add('catalog__legend--open');
      filterFieldsets[index].classList.add('catalog__fieldset--open');
    }
  });
})

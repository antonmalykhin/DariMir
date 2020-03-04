'use strict';

var compareButtons = document.querySelectorAll('.account-compare__button');

compareButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    compareButtons.forEach(function (btn) {
      if (btn.classList.contains('account-compare__button--selected')) {
        btn.classList.remove('account-compare__button--selected');
      }
    });
    btn.classList.add('account-compare__button--selected');
  })
})

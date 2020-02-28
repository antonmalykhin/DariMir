'use strict';

var sortingSelect = document.querySelector('.catalog__sorting-select-field');
var sortingOptions = document.querySelector('.catalog__sorting-options');
var sortingOptionsItem = sortingOptions.querySelectorAll('.catalog__sorting-option');

var outSelectClick = function (evt) {
  if (!sortingSelect.contains(evt.target)) {
    sortingOptions.classList.remove('catalog__sorting-options--show');
    document.removeEventListener('mousedown', outSelectClick);
  }
};

sortingSelect.addEventListener('click', function () {
  if(!sortingOptions.classList.contains('catalog__sorting-options--show')) {
    sortingOptions.classList.add('catalog__sorting-options--show');
    document.addEventListener('mousedown', outSelectClick);
  } else {
    sortingOptions.classList.remove('catalog__sorting-options--show');
  }

});

sortingOptionsItem.forEach(function (item) {
  item.addEventListener('mousedown', function () {
    sortingSelect.value = item.innerText;
  })
});



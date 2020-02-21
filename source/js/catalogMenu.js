'use strict';

var catalogMenu = document.querySelector('.page-header__main-menu');

var catalogMenuItems = catalogMenu.querySelectorAll('.page-header__main-item');

catalogMenuItems.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    for(var i = 0; i < catalogMenuItems.length; i++) {
      catalogMenuItems[i].classList.remove('page-header__main-item--selected');
    }
    item.classList.add('page-header__main-item--selected');
  })
});

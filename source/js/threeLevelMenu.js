'use strict';

var topLevelBtns = document.querySelectorAll('.navigation__top-link');
var midLevelMenus = document.querySelectorAll('.navigation__mid-level');
var midLevelMenuLinks = document.querySelectorAll('.navigation__mid-link');
var bottomMenuBlocks = document.querySelectorAll('.navigation__bott-container')
var bottomLevelMenus =document.querySelectorAll('.navigation__bott-level');

topLevelBtns.forEach(function (btn, index) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    for (var i = 0; i < topLevelBtns.length; i++) {
      if (evt.target === topLevelBtns[i]) {
        topLevelBtns[i].classList.add('navigation__top-link--active');
        midLevelMenus[i].classList.add('navigation__mid-level--active');
        bottomMenuBlocks[i].classList.add('navigation__bott-container--active');
        for (var j = 0; j < bottomLevelMenus.length; j++) {
          bottomLevelMenus[j].classList.remove('navigation__bott-level--active');
        }
        bottomLevelMenus[i*5].classList.add('navigation__bott-level--active');
      } else {
        topLevelBtns[i].classList.remove('navigation__top-link--active');
        midLevelMenus[i].classList.remove('navigation__mid-level--active');
        bottomMenuBlocks[i].classList.remove('navigation__bott-container--active');
      }
    }
  })
});

midLevelMenuLinks.forEach(function (link, index) {
  link.addEventListener('mouseenter', function (evt) {
    for (var i = 0; i < bottomLevelMenus.length; i++) {
      bottomLevelMenus[i].classList.remove('navigation__bott-level--active');
      if (evt.target === midLevelMenuLinks[i]) {
        bottomLevelMenus[index].classList.add('navigation__bott-level--active');
      }
    }
  })
})


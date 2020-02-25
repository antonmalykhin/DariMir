'use strict';

var navigation = document.querySelector('.page-header__nav');
var catalogButton = navigation.querySelector('.page-header__btn-open--catalog');
var mobileCatalog = navigation.querySelector('.page-header__catalog');
var menuButton = navigation.querySelector('.page-header__btn-open--menu');
var mobileMenu = navigation.querySelector('.page-header__menu');
var searchButton = navigation.querySelector('.user-menu__link--search');
var searchForm = navigation.querySelector('.page-header__title-form');
var bgFade = document.querySelector('.bg-fade');

catalogButton.addEventListener('click', function () {
  mobileCatalog.classList.toggle('page-header__catalog--show');
  catalogButton.classList.toggle('page-header__btn-open--active');
  mobileMenu.classList.remove('page-header__menu--show');
  menuButton.classList.remove('page-header__btn-open--active');
});

menuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('page-header__menu--show');
  menuButton.classList.toggle('page-header__btn-open--active');
  catalogButton.classList.remove('page-header__btn-open--active');
  mobileCatalog.classList.remove('page-header__catalog--show');
});

var onBgClick = function (evt) {
  if(!searchForm.contains(evt.target) && searchForm.classList.contains('page-header__title-form--show')) {
    searchForm.classList.remove('page-header__title-form--show');
    bgFade.classList.add('bg-fade--hide');
  }
};

var onFormBtnClick = function () {
  searchForm.classList.add('page-header__title-form--show');
  bgFade.classList.remove('bg-fade--hide');

  bgFade.addEventListener('click', onBgClick);
}

searchButton.addEventListener('click', onFormBtnClick);




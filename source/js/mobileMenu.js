'use strict';

var navigation = document.querySelector('.page-header__nav');
var catalogButton = navigation.querySelector('.page-header__btn-open--catalog');
var mobileCatalog = navigation.querySelector('.page-header__catalog');
var menuButton = navigation.querySelector('.page-header__btn-open--menu');
var mobileMenu = navigation.querySelector('.page-header__menu');
var searchButton = navigation.querySelector('.user-menu__link--search');
var searchForm = navigation.querySelector('.page-header__title-form');
var bgFade = document.querySelector('.bg-fade');
var searchFormCloseBtn = searchForm.querySelector('.search-form__reset-btn');

var onCatalogBtnClick = function () {
  if (!catalogButton.classList.contains('page-header__btn-open--active')) {
    mobileCatalog.classList.add('page-header__catalog--show');
    catalogButton.classList.add('page-header__btn-open--active');
    bgFade.classList.remove('bg-fade--hide');
    bgFade.style.zIndex = '35';
    mobileMenu.classList.remove('page-header__menu--show');
    menuButton.classList.remove('page-header__btn-open--active');
  } else {
    mobileCatalog.classList.remove('page-header__catalog--show');
    catalogButton.classList.remove('page-header__btn-open--active');
    bgFade.classList.add('bg-fade--hide');
  }
}

var onMenuBtnClick = function () {
  if (!menuButton.classList.contains('page-header__btn-open--active')) {
    mobileMenu.classList.add('page-header__menu--show');
    menuButton.classList.add('page-header__btn-open--active');
    bgFade.classList.remove('bg-fade--hide');
    bgFade.style.zIndex = '35';
    catalogButton.classList.remove('page-header__btn-open--active');
    mobileCatalog.classList.remove('page-header__catalog--show');
  } else {
    mobileMenu.classList.remove('page-header__menu--show');
    menuButton.classList.remove('page-header__btn-open--active');
    bgFade.classList.add('bg-fade--hide');
  }
}

var onBgClick = function (evt) {
  if(!searchForm.contains(evt.target) && searchForm.classList.contains('page-header__title-form--show')) {
    searchForm.classList.remove('page-header__title-form--show');
    bgFade.classList.add('bg-fade--hide');
  }
};

var onFormBtnClick = function () {
  searchForm.classList.add('page-header__title-form--show');
  bgFade.classList.remove('bg-fade--hide');
  bgFade.style.zIndex = '40';

  bgFade.addEventListener('click', onBgClick);
  searchFormCloseBtn.addEventListener('click', onSearchCloseBtnClick);
}

var onSearchCloseBtnClick = function () {
  searchForm.classList.remove('page-header__title-form--show');
  bgFade.classList.add('bg-fade--hide');
  searchFormCloseBtn.removeEventListener('click', onSearchCloseBtnClick);
}

catalogButton.addEventListener('click', onCatalogBtnClick);

menuButton.addEventListener('click', onMenuBtnClick);

searchButton.addEventListener('click', onFormBtnClick);




"use strict";

(function () {
  var hamburger = document.querySelector('.hamburger'),
      links = document.querySelectorAll('.nav__link:not(.user-info__email)'),
      searchBtn = document.querySelector('.nav__search-btn'),
      projectCreatorbtn = document.querySelector('.nav__link--is-btn'),
      closeIconProjectCreator = document.querySelector('.project-creator__close'),
      body = document.body;
  hamburger.addEventListener('click', function () {
    body.classList.toggle('hamburger--open');
    body.classList.toggle('nav__menu--open');
  });
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      body.classList.remove('hamburger--open');
      body.classList.remove('nav__menu--open');
    });
  });
  searchBtn.addEventListener('click', function () {
    body.classList.toggle('nav__search-btn--open');
    document.querySelector('.main-content').classList.toggle('main-content--push');
  });
  projectCreatorbtn.addEventListener('click', function () {
    body.classList.toggle('project-creator--open');
  });
  closeIconProjectCreator.addEventListener('click', function () {
    body.classList.remove('project-creator--open');
  });
})();
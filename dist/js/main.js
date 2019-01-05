"use strict";

(function () {
  // event delegation
  document.body.addEventListener('click', function (e) {
    var target = e.target,
        body = document.body;

    if (target.classList.contains('hamburger')) {
      body.classList.toggle('hamburger--open');
      body.classList.toggle('nav__menu--open');
    } else if (target.classList.contains('nav__link') && !target.classList.contains('user-info__email')) {
      body.classList.remove('hamburger--open');
      body.classList.remove('nav__menu--open');
    }

    if (target.classList.value === 'nav__link nav__link--flex nav__search-btn') {
      body.classList.toggle('nav__search-btn--open');
    }
  });
})();
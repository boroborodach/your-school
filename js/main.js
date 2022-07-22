
document.querySelector('.header-nav__btn').addEventListener('click', function (){
  document.querySelector('.header-nav__menu').classList.toggle('header-nav__menu--active');
  document.querySelector('.header-nav__login').classList.toggle('header-nav__login--active');
});

let menuList = document.querySelectorAll('.header-nav__logo, .header-nav__menu-link, .header-nav__login-link');

for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener('click', function(){
    document.querySelector('.header-nav__menu').classList.remove('header-nav__menu--active');
    document.querySelector('.header-nav__login').classList.remove('header-nav__login--active');
  });
}

let closeMenuList = document.querySelectorAll('.header-content, header-bottom, section, footer');

for (let i = 0; i < closeMenuList.length; i++) {
  closeMenuList[i].addEventListener('click', function () {
    document.querySelector('.header-nav__menu').classList.remove('header-nav__menu--active');
    document.querySelector('.header-nav__login').classList.remove('header-nav__login--active');
  });
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
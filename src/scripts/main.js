(() => {

 const BURGER_MENU = document.querySelector('.js-burger');
 const HEADER_MENU = document.querySelector('.js-header-menu');
 const MENU_ITEM = document.querySelectorAll('.header__menu-link');


 BURGER_MENU.addEventListener('click', () => {

  if (HEADER_MENU.classList.contains('js-hide')) {
   HEADER_MENU.classList.remove('js-hide');
   setTimeout(() => {
    HEADER_MENU.classList.add('js-menu');
   });

  } else {
   closeMenu();
  }

 });


 MENU_ITEM.forEach((item) => {

  item.addEventListener('click', (ev) => {
   closeMenu();
  })

 });


 function closeMenu() {
  HEADER_MENU.classList.remove('js-menu');
  setTimeout(() => {
   HEADER_MENU.classList.add('js-hide');
  }, 1000);
 }





})();



(() => {

 const BASKET = document.querySelector('.js-basket');
 const PURCHASES = document.querySelector('.js-purchases');

 let countPurchas = 1;
 BASKET.addEventListener('click', () => {
  countPurchas += 1;
  PURCHASES.innerText = countPurchas;
 });




})();
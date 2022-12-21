const headerForm = document.querySelector('.header__form');
const footerForm = document.querySelector('.footer__form');
const headerButton = document.querySelector('.header__button');
const footerButton = document.querySelector('.footer__button');
const headerString = document.querySelector('.header__string');
const footerString = document.querySelector('.footer__string');
//функция для изменения текста в зависимости от размера экрана
window.onresize = sizeWin;
function sizeWin() {
  if (window.screen.availWidth < 515) {
    headerButton.textContent = '✌';
    footerButton.textContent = '✌';
  }
  else {
    headerButton.textContent = 'Отремонтируйте камеру ✌';
    footerButton.textContent = 'Отремонтируйте камеру ✌';
  }
}
sizeWin();
// изменение текста в кнопке при отправки формы в шапке
headerForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  if (window.screen.availWidth > 515) {
    headerButton.textContent = 'Круто, спасибо за доверие!';
    headerString.value = '';
  }
  else {
    headerButton.textContent = '👍';
    headerString.value = '';
  }
});
// изменение текста в кнопке при отправки формы в подвале
footerForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  if (window.screen.availWidth > 515) {
    footerButton.textContent = 'Круто, спасибо за доверие!';
    footerString.value = '';
  }
  else {
    footerButton.textContent = '👍';
    footerString.value = '';
  }
});


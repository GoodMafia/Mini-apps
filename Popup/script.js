const popupBtn = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup_content');
const popupClose = document.querySelector('.popup_close');

popupBtn.addEventListener('click', () => {
  popup.classList.add('opened');
});

popupClose.addEventListener('click', () => {
  popup.classList.remove('opened');
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.classList.remove('opened');
  }
});
localStorage.name = 'Misha';

const Misha = localStorage.name;
console.log(Misha);
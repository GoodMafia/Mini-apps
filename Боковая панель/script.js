const burgerButton = document.querySelector('main button');
const closeButton = document.querySelector('.close');
const leftPanel = document.querySelector('.left-panel');
const mainContent = document.querySelector('main');
burgerButton.addEventListener('click', () => {
    leftPanel.style.width = '250px';
    mainContent.style.marginLeft = '250px';
    burgerButton.style.display = 'none';
});
closeButton.addEventListener('click', () => {
leftPanel.style.width = '0';
mainContent.style.marginLeft = '0';
burgerButton.style.display = 'block';
});
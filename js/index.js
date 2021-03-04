const burgerBtn = document.querySelector('.header__burger');
const ratingValue = document.querySelectorAll('.rating__value');
const links = document.querySelectorAll('a[href^="#"]');
const topArrowBtn = document.querySelector('.top-arrow');

const values = ['70%', '60%', '50%'];
let timeOut;

burgerBtn.addEventListener('click', () => {
  document.querySelector('.nav__list').classList.toggle('active');
  document.querySelector('body').classList.toggle('active');
  burgerBtn.classList.toggle('active');
});

ratingValue.forEach((item, i) => {
  item.style.setProperty('--width', values[i]);
});

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');

    document.querySelector('body').classList.remove('active');
    document.querySelector('.nav__list').classList.remove('active');
    burgerBtn.classList.remove('active');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

topArrowBtn.addEventListener('click', goUp);
function goUp() {
  let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

  if (top > 0) {
    window.scrollBy(0, -100);
    timeOut = setTimeout('goUp()', 20);
  } else clearTimeout(timeOut);
}

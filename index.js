//toggleMobileMenu
const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  body: document.querySelector('body'),
  menuList: document.querySelector('.mob-menu__nav'),
};

refs.openMenuBtn.addEventListener('click', openMenu);
refs.closeMenuBtn.addEventListener('click', removeMenu);
refs.menuList.addEventListener('click', removeMenu);

function openMenu() {
  refs.menu.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
  refs.menu.style.width = '300px';
}

function removeMenu() {
  refs.menu.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  refs.menu.style.width = '0';
}

//show time
const time = document.querySelector('.header__time');

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = (hours < 10 ? '0' : '') + hours;
  minutes = (minutes < 10 ? '0' : '') + minutes;

  const currentTime = hours + ':' + minutes;
  time.innerText = currentTime;
}

setInterval(getCurrentTime, 1000);
getCurrentTime();

//aside-accordion
const toggleButtonAccordion = document.querySelectorAll('.js-button-accordion');

for (let i = 0; i < toggleButtonAccordion.length; i++) {
  toggleButtonAccordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 32 + 'px';
    }
  });
}

// button Up
const scrollTop = function () {
  const scrollBtn = document.querySelector('.button-up');

  const scrollBtnDisplay = function () {
    if (window.scrollY > 600) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  };
  window.addEventListener('scroll', scrollBtnDisplay);

  const scrollWindow = function () {
    if (window.scrollY !== 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener('click', scrollWindow);
};

scrollTop();

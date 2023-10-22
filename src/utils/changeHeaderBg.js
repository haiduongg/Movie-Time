const navBar = document.querySelector('header');

const changeBackground = () => {
  if (window.scrollY >= 1) {
    navBar.classList.add('changeBackground');
  } else {
    navBar.classList.remove('changeBackground');
  }
};

window.addEventListener('scroll', changeBackground);

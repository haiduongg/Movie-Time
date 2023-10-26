const btnLogout = document.getElementById('Logout');
btnLogout.addEventListener('click', () => {
  localStorage.removeItem('isLogin');
  window.location = '/';
});

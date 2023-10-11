let login = document.getElementById('login');
let get = localStorage.getItem('userData') || [];
let userData = JSON.parse(get);

// console.log(userData);

login.addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let flag = false;

  userData.forEach((item) => {
    if (item.email === email) {
      if (item.password === password) {
        flag = true;
        console.log(item);
      }
    }
  });
  flag ? alert('Login Successly') : alert('Login Failded');
});

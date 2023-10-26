let signup = document.getElementById('signup');
let showPwIcon = document.getElementById('show-password-icon');
let showCfIcon = document.getElementById('show-confirm-icon');

function Customer(id, username, email, phoneNumber, password) {
  this.id = id;
  this.username = username;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.password = password;
}

showPwIcon.addEventListener('click', () => {
  if (
    document.getElementById('show-password-icon').getAttribute('class') ===
    'bx bx-show show-icon'
  ) {
    document.getElementById('password').setAttribute('type', 'text');
    document
      .getElementById('show-password-icon')
      .setAttribute('class', 'bx bx-hide show-icon');
  } else {
    document.getElementById('password').setAttribute('type', 'password');
    document
      .getElementById('show-password-icon')
      .setAttribute('class', 'bx bx-show show-icon');
  }
});

showCfIcon.addEventListener('click', () => {
  if (
    document.getElementById('show-confirm-icon').getAttribute('class') ===
    'bx bx-show show-icon'
  ) {
    document.getElementById('confirm-password').setAttribute('type', 'text');
    document
      .getElementById('show-confirm-icon')
      .setAttribute('class', 'bx bx-hide show-icon');
  } else {
    document
      .getElementById('confirm-password')
      .setAttribute('type', 'password');
    document
      .getElementById('show-confirm-icon')
      .setAttribute('class', 'bx bx-show show-icon');
  }
});

signup.addEventListener('click', () => {
  let userData = JSON.parse(localStorage.getItem('userData')) || [];

  let id = Math.floor(Math.random() * 1000);
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let phoneNumber = document.getElementById('phone-number').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password').value;

  if (!username || !email || !phoneNumber || !password || !confirmPassword) {
    alert('Please input invaild');
  } else if (password !== confirmPassword) {
    alert('password is not same confirm password');
  } else if (email.indexOf('@gmail.com') == -1) {
    alert('Please input email again');
  } else if (phoneNumber.length != 10) {
    alert('Please input phone again');
  } else {
    alert('Signup Successfully');
    window.location = '../views/Login.html';
    let newUser = new Customer(id, username, email, phoneNumber, password);
    userData.push(newUser);
    localStorage.setItem('userData', JSON.stringify(userData));
  }
});

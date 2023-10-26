let login = document.getElementById('login');
let showIcon = document.getElementById('show-icon');
let userData = JSON.parse(localStorage.getItem('userData')) ?? [];
let isLogin = JSON.parse(localStorage.getItem('isLogin')) ?? false;

showIcon.addEventListener('click', () => {
  if (
    document.getElementById('show-icon').getAttribute('class') === 'bx bx-show'
  ) {
    document.getElementById('password').setAttribute('type', 'password');
    document.getElementById('show-icon').setAttribute('class', 'bx bx-hide');
  } else {
    document.getElementById('password').setAttribute('type', 'text');
    document.getElementById('show-icon').setAttribute('class', 'bx bx-show');
  }
});

login.addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Vui lòng không để trống');
  } else {
    let user = userData.find((x) => {
      return x.email === email;
    });
    if (user) {
      if (user.password === password) {
        alert('Đăng nhập thành công');
        window.location = '/';
        isLogin = JSON.stringify(localStorage.setItem('isLogin', true));
      } else {
        alert('Mật khẩu không chính xác');
      }
    } else {
      alert('Email không tồn tại. Vui lòng đăng ký');
      window.location = './Signup.html';
    }
  }
});

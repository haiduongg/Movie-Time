let login = document.getElementById('login');
let userData = JSON.parse(localStorage.getItem('userData')) ?? [];
let isLogin = JSON.parse(localStorage.getItem('isLogin')) ?? false;

login.addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  userData.forEach((item) => {
    if (item.email !== email) {
      alert(
        'Email chưa được đăng ký. Nhấn "OK" để điều hướng tới trang đăng ký'
      );
      window.location = './Signup.html';
    }
    if (item.password !== password) {
      alert('Mật khẩu không chính xác');
    }
    if (item.email === email && item.password === password) {
      alert('Đăng nhập thành công');
      window.location = '/';
      isLogin = JSON.stringify(localStorage.setItem('isLogin', true));
    } else {
      ('Đăng nhập thất bại');
    }
  });
});

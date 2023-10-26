// Reneder Header
let isLogin = JSON.parse(localStorage.getItem('isLogin')) ?? false;
let logout = document.getElementById('Logout');
let headerElement = '';

if (isLogin) {
  headerElement = `
	<div>
        <nav>
          <div class="container header__inner">
            <div class="header__inner-logo">
              <a href="/"
                ><img
                  src="../../assets/img/header__logo.png"
                  alt="Movie Time Logo"
              /></a>
            </div>

            <div class="header__inner-search">
              <i class="bx bx-search"></i>
              <input type="text" name="search" placeholder="Search..." />
            </div>

            <div class="header__inner-navigation">
              <ul class="header__inner-navigation-menu">
                <li><a href="/">Trang chủ</a></li>
                <li><a href="#">Lịch chiếu phim</a></li>
                <li><a href="https://www.facebook.com/haiduong004" target="_blank">Về chúng tôi</a></li>
              </ul>

              <div class="header__inner-navigation-personal">
                <div class="header__inner-navigation-personal-trigger">
                  <img
                    src="../../assets/img/avatar.jpg"
                    alt="avatar"
                    width="40"
                    height="40"
                    class="header__inner-navigation-personal-trigger-avatar"
                  />
                  <span class="header__inner-navigation-personal-trigger-name"
                    >Cao Hai Duong</span
                  >
                  <i class="bx bx-chevron-down"></i>
                </div>

                <div class="header__inner-navigation-personal-dropdown">
                  <ul>
                    <li>
                      <a href="../Carts/Carts.html">Giỏ hàng</a>
                    </li>
                    <li id='Logout'>Đăng xuất</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
	`;
} else {
  headerElement = `<div">
  <nav>
    <div class="container header__inner">
      <div class="header__inner-logo">
        <a href="/"
          ><img
            src="../../assets/img/header__logo.png"
            alt="Movie Time Logo"
        /></a>
      </div>

      <div class="header__inner-search">
        <i class="bx bx-search"></i>
        <input type="text" name="search" placeholder="Search..." />
      </div>

      <div class="header__inner-navigation">
        <ul class="header__inner-navigation-menu">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="#">Lịch chiếu phim</a></li>
          <li><a href="https://www.facebook.com/haiduong004" target="_blank">Về chúng tôi</a></li>
        </ul>
        <div class="action">
          <div id="login" class="button">
            <a href="../Login.html">
              <i class="bx bx-user"></i>Login
            </a>
          </div>
          <div id="signup" class="button">
            <a href="../Signup.html">
              <i class="bx bx-plus"></i>Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
`;
}

document.getElementById('header').innerHTML = headerElement;

// Add cart
const buttonBuy = document.getElementById('buy');
const getCarts = JSON.parse(localStorage.getItem('Carts')) ?? [];

buttonBuy.addEventListener('click', () => {
  if (!isLogin) {
    alert('Vui lòng đăng nhập để tiếp tục mua hàng');
    window.location = '../Login.html';
  } else {
    const id = Math.floor(Math.random() * 100);
    const name = document.querySelector(
      '.product__inner-desc-heading'
    ).textContent;
    const image = document
      .querySelector('.product__inner-image img')
      .getAttribute('src');
    const price = 50000;
    const quantity = 1;
    const item = {
      id: id,
      image: image,
      name: name,
      price: price,
      quantity: quantity,
    };
    getCarts.push(item);
    localStorage.setItem('Carts', JSON.stringify(getCarts));
    alert('Đã thêm vào giỏ hàng');
  }
});

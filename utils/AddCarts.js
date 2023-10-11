const buttonBuy = document.getElementById('buy');
const getCarts = JSON.parse(localStorage.getItem('Carts')) ?? [];

buttonBuy.addEventListener('click', () => {
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
});

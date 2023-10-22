let films = JSON.parse(localStorage.getItem('Carts'));
const checkout = document.getElementById('icon');
const deleteButton = document.getElementById('delete');
console.log(films);

// function deleteCart(index) {
//   let news = films.splice(index - 1, 1);
//   alert('Delete Successfully');
//   RenderCarts(news);
// }
function deleteCart(id) {
  let news = films.filter((film) => {
    return film.id != id;
  });
  alert('Delete Successfully');
  RenderCarts(news);
}

function changeQuantity(index, quantity) {
  films[index].quantity = quantity;
  RenderCarts(films);
}

function RenderCarts(films) {
  let element = '';
  let total = 0;

  films.forEach((film, index) => {
    total += film.quantity * film.price;

    element += `
    <div class="films-item grid">
                    <p class="id-film">${film.id}</p>
                    <img src='${film.image}' alt=${film.name} />
                    <p class='film-name'>${film.name}</p>
                    <p>${new Intl.NumberFormat().format(film.price)}đ</p>
                    <div class="quantity">
                      <button class='changeQuantityButton' onclick="changeQuantity(${index}, ${
      film.quantity - 1
    })">
                        <p>-</p>
                      </button>
                      <input
                        type="number"
                        name="Quantity"
                        id="quantity"
                        value=${film.quantity}
                      />
                      <button class='changeQuantityButton' onclick="changeQuantity(${index}, ${
      film.quantity + 1
    })">
                        <p>+</p>
                      </button>
                    </div>
                    <div class="films-item-total">
                      <p>${new Intl.NumberFormat().format(
                        film.quantity * film.price
                      )}đ</p>
                      <i id="delete" class='bx bxs-x-square' onclick="deleteCart(${
                        film.id
                      })"></i>
                    </div>
                  </div>`;
  });
  document.getElementById('list').innerHTML = element;
  document.getElementById('sum').innerHTML =
    new Intl.NumberFormat().format(total) + 'đ';
  localStorage.setItem('Carts', JSON.stringify(films));
}
RenderCarts(films);

checkout.addEventListener('click', () => {
  alert('Mua vé thành công');
  localStorage.setItem('Carts', JSON.stringify(null));
  document.getElementById('list').innerHTML = '';
});

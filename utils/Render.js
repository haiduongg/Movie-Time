const films = [
  {
    id: 1,
    img: '../img/posters/NhanDuyenTienDinh.jpg',
    href: '../views/Product/NhanDuyenTienDinh.html',
    name: 'Nhân Duyên Tiền Đình',
    type: 'Hài hước',
    time: '118 phút',
  },
  {
    id: 2,
    img: '../img/posters/Shin.jpg',
    href: '../views/Product/Shin.html',
    name: '3DCG! Shin - Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~ Shusi Bay ~',
    type: 'Hoạt hình, Phiêu lưu',
    time: '94 phút',
  },
  {
    id: 3,
    img: '../img/posters/AnMangOVenice.jpg',
    href: '../views/Product/AnMangOVenice.html',
    name: 'Án Mạng Ở Venice',
    type: 'Tội phạm, Tâm lý',
    time: '103 phút',
  },
  {
    id: 4,
    img: '../img/posters/TrungPhat.jpg',
    href: '../views/Product/TrungPhat.html',
    name: 'Trừng Phạt',
    type: 'Hành động, Tội phạm',
    time: '91 phút',
  },
  {
    id: 5,
    img: '../img/posters/AcQuyMaSoII.jpg',
    href: '../views/Product/AcMaQuySoII.html',
    name: 'Ác Quỷ Ma Sơ II',
    type: 'Kinh dị, Hồi hộp',
    time: '110 phút',
  },
  {
    id: 6,
    img: '../img/posters/TinhBanDieuKy.jpg',
    href: '../views/Product/TinhBanDieuKy.html',
    name: 'Tình Bạn Diệu Kỳ',
    type: 'Hoạt hình, Phiêu lưu',
    time: '90 phút',
  },
  {
    id: 7,
    img: '../img/posters/DiaDangSupDo.jpg',
    href: '../views/Product/DiaDangSupDo.html',
    name: 'Địa Đàng Sụp Đổ',
    type: 'Hành động, Ly kì, Hồi hộp',
    time: '129 phút',
  },
];

function Render() {
  let element = '';
  for (let i = 0; i < films.length; i++) {
    element += `<div class="film__item">
				  <div class="film__item-img">
					<a href="${films[i].href}">
					  <img src="${films[i].img}" alt="Nhân duyên tiền đình"/>
					</a>
				  </div>
				  <div class="film__item-desc">
					<a href="${films[i].href}">
					  <p class="title">${films[i].name}</p>
					</a>
					<p class="tag">Thể loại: ${films[i].type}</p>
					<p class="spending">Thời lượng: ${films[i].time}</p>
				  </div>
				</div>`;
  }
  document.getElementById('film-list').innerHTML = element;
}

Render();

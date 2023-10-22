const films = {
  showing: [
    {
      id: 1,
      img: './src/assets/img/posters/NhanDuyenTienDinh.jpg',
      href: './src/views/Product/NhanDuyenTienDinh.html',
      name: 'Nhân Duyên Tiền Đình',
      type: 'Hài hước',
      time: '118 phút',
    },
    {
      id: 2,
      img: './src/assets/img/posters/Shin.jpg',
      href: './src/views/Product/Shin.html',
      name: '3DCG! Shin - Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~ Shusi Bay ~',
      type: 'Hoạt hình, Phiêu lưu',
      time: '94 phút',
    },
    {
      id: 3,
      img: './src/assets/img/posters/AnMangOVenice.jpg',
      href: './src/views/Product/AnMangOVenice.html',
      name: 'Án Mạng Ở Venice',
      type: 'Tội phạm, Tâm lý',
      time: '103 phút',
    },
    {
      id: 4,
      img: './src/assets/img/posters/TrungPhat.jpg',
      href: './src/views/Product/TrungPhat.html',
      name: 'Trừng Phạt',
      type: 'Hành động, Tội phạm',
      time: '91 phút',
    },
    {
      id: 5,
      img: './src/assets/img/posters/AcQuyMaSoII.jpg',
      href: './src/views/Product/AcMaQuySoII.html',
      name: 'Ác Quỷ Ma Sơ II',
      type: 'Kinh dị, Hồi hộp',
      time: '110 phút',
    },
    {
      id: 6,
      img: './src/assets/img/posters/TinhBanDieuKy.jpg',
      href: './src/views/Product/TinhBanDieuKy.html',
      name: 'Tình Bạn Diệu Kỳ',
      type: 'Hoạt hình, Phiêu lưu',
      time: '90 phút',
    },
    {
      id: 7,
      img: './src/assets/img/posters/DiaDangSupDo.jpg',
      href: './src/views/Product/DiaDangSupDo.html',
      name: 'Địa Đàng Sụp Đổ',
      type: 'Hành động, Ly kì, Hồi hộp',
      time: '129 phút',
    },
  ],
  commingSoon: [
    {
      id: 1,
      img: './src/assets/img/posters/BietDoiDanhThue4.png',
      href: './src/views/Product/BietDoiDanhThue4.html',
      name: 'Biệt Đội Đánh Thuê 4',
      type: 'Hành động, Phiêu lưu',
      time: '100 phút',
    },
    {
      id: 2,
      img: './src/assets/img/posters/DieuCamKyKinhHoang.png',
      href: './src/views/Product/DieuCamKyKinhHoang.html',
      name: 'Điều Cấm Kỵ Kinh Hoàng',
      type: 'Kinh dị',
      time: '90 phút',
    },
  ],
  early: [
    {
      id: 1,
      img: './src/assets/img/posters/DiaDangSupDo.jpg',
      href: './src/views/Product/DiaDangSupDo.html',
      name: 'Địa Đàng Sụp Đổ',
      type: 'Hành động, Hồi hộp, Ly kì',
      time: '129 phút',
    },
    {
      id: 2,
      img: './src/assets/img/posters/Shin.jpg',
      href: './src/views/Product/Shin.html',
      name: '3DCG! Shin - Cậu Bé Bút Chì: Đại Chiến Siêu Năng Lực ~Shusi Bay ~',
      type: 'Hoạt hình, Phiêu lưu',
      time: '94 phút',
    },
  ],
};

function Render() {
  console.log(films);
  let showing = '';
  let early = '';
  let comming = '';

  // Phim dang chieu
  for (let i = 0; i < films.showing.length; i++) {
    showing += `<div class="film__item">
				  <div class="film__item-img">
					<a href="${films.showing[i].href}">
					  <img src="${films.showing[i].img}" alt="${films.showing[i].name}"/>
					</a>
				  </div>
				  <div class="film__item-desc">
					<a href="${films.showing[i].href}">
					  <p class="title">${films.showing[i].name}</p>
					</a>
					<p class="tag">Thể loại: ${films.showing[i].type}</p>
					<p class="spending">Thời lượng: ${films.showing[i].time}</p>
				  </div>
				</div>`;
  }

  // Suat chieu som
  for (let i = 0; i < films.early.length; i++) {
    early += `<div class="film__item">
				  <div class="film__item-img">
					<a href="${films.early[i].href}">
					  <img src="${films.early[i].img}" alt="${films.early[i].name}"/>
					</a>
				  </div>
				  <div class="film__item-desc">
					<a href="${films.early[i].href}">
					  <p class="title">${films.early[i].name}</p>
					</a>
					<p class="tag">Thể loại: ${films.early[i].type}</p>
					<p class="spending">Thời lượng: ${films.early[i].time}</p>
				  </div>
				</div>`;
  }

  // Phim sap chieu
  for (let i = 0; i < films.commingSoon.length; i++) {
    comming += `<div class="film__item">
				  <div class="film__item-img">
					<a href="${films.commingSoon[i].href}">
					  <img src="${films.commingSoon[i].img}" alt="${films.commingSoon[i].name}"/>
					</a>
				  </div>
				  <div class="film__item-desc">
					<a href="${films.commingSoon[i].href}">
					  <p class="title">${films.commingSoon[i].name}</p>
					</a>
					<p class="tag">Thể loại: ${films.commingSoon[i].type}</p>
					<p class="spending">Thời lượng: ${films.commingSoon[i].time}</p>
				  </div>
				</div>`;
  }

  // Render
  document.getElementById('film-showing').innerHTML = showing;
  document.getElementById('film-early').innerHTML = early;
  document.getElementById('film-comming').innerHTML = comming;
}

Render();

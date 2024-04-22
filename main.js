import { buttonData, menu } from "./js/db.js";
import { calculatePrice, elements } from "./js/helpers.js";

//*! Fonksiyonlar;
const renderMenuItems = (menuItems) => {
  /*
   *Dizideki her bir obje için HTML elemanı oluşturur.
   *Bu Html'i bir diziye aktarır.
   */
  let menuHTML = menuItems
    .map(
      (item) => `
      <a
      href="/productDetail.html?id=${item.id}"
      class="text-decoration-none text-dark d-flex flex-column flex-md-row gap-2"
      id="card"
    >
      <img src="${item.img}" alt="" class="rounded shadow" />
      <div>
        <div class="d-flex justify-content-between">
          <h5>${item.title}</h5>
          <p class="text-success">${calculatePrice(item.price)}tl</p>
        </div>
        <p class="lead fs-6 fw-normal">
        ${item.desc}
        </p>
      </div>
    </a>
    `
    )
    .join("");
  elements.menuArea.innerHTML = menuHTML;
};
//*tıklanılan butona göre o butonun kategorisine ait ürünleri listele;
const searchCategory = (e) => {
  const category = e.target.dataset.category;
  //*tüm dizi elemanlarından yalnızca kategori değeri butonun kategori değeri ile
  //* eşleşenleri getir ve bir değişkene aktar
  const filteredMenu = menu.filter((item) => item.category === category);
  //*Hepsi seçilirse bütün menüyü ekrana aktarır.
  if (e.target.tagName === 'DIV'){
    return;
  }else if (category === "all") {
    renderMenuItems(menu);
  } else {
    //*Filtrelenen elemanları ekrana aktarması için menu dizisinden oluşturduğumuz
    //* filteredMenu dizisini ekrana aktarır.
    renderMenuItems(filteredMenu);
  }
  //* Seçtiğimiz kategorinin butonunu aktifleştirebilmek için kategoriyi paremetre olarak gönderdik.
  renderButtons(category);
};
//*Ekrana butonları basma;
const renderButtons = (active) => {
  //*Eski butonları ekrandan sil;
  elements.buttonsArea.innerHTML = "";
  //* Yeni butonlar oluşturma,
  buttonData.forEach((btn) => {
    //*HTML butonu oluşturma,
    const buttonEle = document.createElement("button");
    buttonEle.className = "btn filter-btn btn-outline-dark";
    buttonEle.textContent = btn.text;
    buttonEle.dataset.category = btn.value;
    //* Eğerki active kategorisiyle buton eşleşirse ona farklı clas ekle,
    if (btn.value === active) {
      buttonEle.classList.add("bg-dark", "text-light");
    }
    //*HTML'e gönderme,
    elements.buttonsArea.appendChild(buttonEle);
  });
};

//*! Olay izleyicileri;
//*Sayfa yüklendiği anda ekrana renderButtons ve renderMenuItems fonk. calıştırır.
document.addEventListener("DOMContentLoaded", () => {
  renderButtons("all");
  renderMenuItems(menu);
  
});
elements.buttonsArea.addEventListener("click", searchCategory);

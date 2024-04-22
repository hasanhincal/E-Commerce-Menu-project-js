import { menu } from "./db.js";
import { calculatePrice, elements } from "./helpers.js";

console.log(window.location)
const searchParams = new URLSearchParams(window.location.search)
//*get metodu ile URL'deki parametesine eriştik,
const paramId = searchParams.get("id")
//*menü içerisinden id'sini bildiğimiz elemana ulaşma;
const product = menu.find((item)=>item.id ===Number(paramId))
//* bulduğumuz ürüne göre arayüzü ekrana basma;
elements.outlet.innerHTML = `
<div 
class="d-flex justify-content-between align-items-center">
    <a href="/index.html"><i class="bi bi-house fs-1"></i></a>
    <div class="fs-5">anasayfa / ${product.category} / ${product.title.toLocaleLowerCase()}</div>
    </div>
      <h1 class="text-center my-3 rounded p-2 shadow">${product.title}</h1>
    <div class="d-flex align-items-center justify-content-center">
     <img src="${product.img}"
     style="max-width: 500px;" 
     class="img-fluid shadow rounded" alt="">
    </div>
    <h3 class="my-2">ürün kategorisi: <span class="text-success">  ${product.category}</span></h3>
    <h3 class="mb-2">ürün fiyatı: <span class="text-success"> ${calculatePrice(product.price)}₺</span></h3>
    <p class="lead fs-5 fw-normal">${product.desc}
    </p>
`
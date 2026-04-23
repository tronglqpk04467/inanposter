// ===== SLIDER =====
const slides = [
  "images/trangchudoi2.png",
  "images/trangtrduoi.png"
];

let i = 0;
const slide = document.getElementById("slide");

function next(){
  i = (i + 1) % slides.length;
  slide.src = slides[i];
}

function prev(){
  i = (i - 1 + slides.length) % slides.length;
  slide.src = slides[i];
}

// ===== PRODUCTS =====
const data = [
  {img:"images/Postermew.png", old:"120.000", new:"100.000"},
  {img:"images/posterlugia.png", old:"400.000", new:"300.000"},
  {img:"images/poster hoa xanh.png", old:"400.000", new:"120.000"},
  {img:"images/Poster hoa do.png", old:"120.000", new:"110.000"},
  {img:"images/Poster hoa trawngs.png", old:"120.000", new:"120.000"}
];

const box = document.getElementById("products");

data.forEach(p=>{
  box.innerHTML += `
    <div class="bg-gray-300 p-3 text-center hover:scale-105 transition">
      <img src="${p.img}" class="w-full h-52 object-cover">

      <p class="line-through text-sm text-gray-600">${p.old} VNĐ</p>
      <p class="text-red-500 font-bold">${p.new} VNĐ</p>

      <button class="mt-2 bg-black text-white px-3 py-1">
        Mua ngay
      </button>
    </div>
  `;
});

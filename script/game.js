const player = document.querySelector(".player img");
const areaGame = document.querySelector(".area-game");
const hadiah = document.querySelector(".hadiah");
// const skor = document.querySelector("#hasil-skor");
// const nyawa = document.querySelector("#hasil-nyawa");
const bom = document.querySelector(".bom");
const kiri = document.querySelector(".kiri");
const kanan = document.querySelector(".kanan");

// initial position player berada di tengah
const lebarArea = areaGame.offsetWidth;
const lebarPlayer = player.offsetWidth;
let posisi = (lebarArea - lebarPlayer) / 2;
player.style.left = `${posisi}px`;
console.log(posisi + "belum");

// inisialisasi skor dan nyawa
let skor = 0
let nyawa = 3;

// Fungsi untuk mendeteksi tabrakan antara dua elemen
function cekTabrakan(a, b) {
  const rectA = a.getBoundingClientRect();
  const rectB = b.getBoundingClientRect();

  return !(
    rectA.bottom < rectB.top ||
    rectA.top > rectB.bottom ||
    rectA.right < rectB.left ||
    rectA.left > rectB.right
  );
}

// Fungsi untuk memperbarui tampilan nyawa (❤️)
function updateNyawa() {
  const container = document.querySelector("#hasil-nyawa");
  container.textContent = "❤️".repeat(nyawa);
}

// funsi menjatuhkan barang
function jatuhkanBarang(elemen, delay = 0) {
  let posisiY = 0;
  const maxKiri = areaGame.offsetWidth - elemen.offsetWidth;

  setTimeout(() => {
    // tampilkan elemen setelah delay
    elemen.style.visibility = "visible";

    // acak posisi kiri saat mulai
    elemen.style.left = Math.floor(Math.random() * maxKiri) + "px";

    setInterval(() => {
      posisiY += 5;
      elemen.style.top = posisiY + "px";

      const batasBawah = areaGame.clientHeight;
      const tinggiBarang = elemen.offsetHeight;

      // jikak terjadi tabrakan dengan player
      if (cekTabrakan(elemen, player)) {
        posisiY = 0;
        elemen.style.left = Math.floor(Math.random() * maxKiri) + "px";

        if (elemen.classList.contains("hadiah")) {
          skor+= 10;
          document.querySelector("#hasil-skor").textContent = skor;
          
        }

        if (elemen.classList.contains("bom")) {
          nyawa--;
          updateNyawa();
          if (nyawa <= 0) {
            alert("Game Over!");
            location.reload(); // Restart game
          }
        }
      }

      if (posisiY > batasBawah - tinggiBarang) {
        posisiY = 0;
        elemen.style.left = Math.floor(Math.random() * maxKiri) + "px";
      }
    }, 30);
  }, delay);
}

jatuhkanBarang(hadiah);
jatuhkanBarang(bom, 3000);
// jatuhkanBarang(bom);

kiri.addEventListener("click", () => {
  posisi = parseInt(player.style.left);

  if (posisi > 0) {
    posisi -= 15;
    if (posisi < 0) posisi = 0;

    player.style.left = `${posisi}px`;
    player.style.transform = "scaleX(1)";
  }
});

kanan.addEventListener("click", () => {
  posisi = parseInt(player.style.left);
  const batas = areaGame.offsetWidth - player.offsetWidth;

  if (posisi < batas) {
    posisi += 15;
    if (posisi > batas) posisi = batas;

    player.style.left = `${posisi}px`;
    player.style.transform = "scaleX(-1)";
  }
});

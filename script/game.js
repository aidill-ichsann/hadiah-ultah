const player = document.querySelector(".player img");
const areaGame = document.querySelector(".area-game");
const kiri = document.querySelector(".kiri");
const kanan = document.querySelector(".kanan");

// initial position player berada di tengah
const lebarArea = areaGame.offsetWidth;
const lebarPlayer = player.offsetWidth;
let posisi = (lebarArea - lebarPlayer) / 2;
player.style.left = `${posisi}px`;
console.log(posisi + 'belum');


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

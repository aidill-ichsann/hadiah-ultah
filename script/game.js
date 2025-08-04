// script.js
const player = document.querySelector('.player');
const gift = document.querySelector('.gift');
const scoreText = document.getElementById('score');

let playerX = 120;
let giftY = 0;
let giftX = Math.floor(Math.random() * 250);
let score = 0;

// Gerak kiri/kanan
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && playerX > 0) {
    playerX -= 10;
  } else if (e.key === 'ArrowRight' && playerX < 240) {
    playerX += 10;
  }
  player.style.left = `${playerX}px`;
});

// Jatuhin kado
function dropGift() {
  giftY += 5;
  gift.style.top = `${giftY}px`;
  gift.style.left = `${giftX}px`;

  // Cek benturan
  if (
    giftY >= 440 &&
    giftX + 30 > playerX &&
    giftX < playerX + 60
  ) {
    score++;
    scoreText.textContent = score;
    resetGift();

    // Bonus ucapan manis 🥹
    if (score === 10) {
      alert("Kamu udah dapetin semua cinta Aidil~ 💖🎁");
    }
  }

  // Reset kalau jatuh lewat
  if (giftY > 500) {
    resetGift();
  }
}

function resetGift() {
  giftY = 0;
  giftX = Math.floor(Math.random() * 250);
}

// Game loop
setInterval(dropGift, 50);

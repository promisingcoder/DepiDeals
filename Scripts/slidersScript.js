let currentIndex = 0;

function moveSlide(direction) {
  const cards = document.querySelectorAll(".latestCard");
  const totalCards = cards.length;
  const cardWidth = 420; // 400px card width + 20px margin
  currentIndex = (currentIndex + direction + totalCards) % totalCards;
  const offset = -currentIndex * cardWidth;
  document.querySelector(
    ".offersContainer"
  ).style.transform = `translateX(${offset}px)`;
}

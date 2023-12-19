// JavaScript
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.card');
    let maxHeight = 0;
  
    cards.forEach(function(card) {
      const cardHeight = card.offsetHeight;
      maxHeight = cardHeight > maxHeight ? cardHeight : maxHeight;
    });
  
    cards.forEach(function(card) {
      card.style.height = `${maxHeight}px`;
    });
  });
  
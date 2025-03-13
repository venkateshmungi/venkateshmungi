// script.js
const squares = document.querySelectorAll('.square');
const contentDisplay = document.getElementById('contentDisplay');

squares.forEach(square => {
  square.addEventListener('click', (event) => {
    const content = square.getAttribute('data-content');
    contentDisplay.textContent = content;

    // Rotate the square on click
    square.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      square.style.transform = 'rotate(0deg)';
    }, 500);
  });
});
const textElement = document.getElementById('text');
const colors = ['#de164f', '#afa8a8', '#4fc1e9', '#a2d050']; // Array of colors

let currentColorIndex = 0;

function changeColor() {
  textElement.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Loop through the colors array
}

// Seconds variable
const seconds = 30
setInterval(changeColor, seconds * 1000); // Call changeColor function every 500ms

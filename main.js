const texts = ["Web Developer", "Frontend Developer","Backend Developer", "Freelancer"];
const typingText = document.querySelector(".typing-text");

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[index];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex--);
  } else {
    typingText.textContent = currentText.substring(0, charIndex++);
  }

  let speed = isDeleting ? 80 : 150;

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    speed = 1000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

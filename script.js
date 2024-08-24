'use strict';
window.onload = () => {
  document.addEventListener('scroll', () => {
    const scrollRotated = document.getElementsByClassName('scroll-rotated');
    for (let rotatedElement of scrollRotated) {
      rotatedElement.style.transform = `rotate(${window.pageYOffset}deg)`;
    }
  });
};
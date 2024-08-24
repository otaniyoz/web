'use strict';
window.onload = () => {
  console.log('loaded 2');
  document.addEventListener('scroll', () => {
    const scrollRotated = document.getElementsByClassName('scroll-rotated');
    for (let rotatedElement of scrollRotated) {
      rotatedElement.style.transform = `rotate(${window.pageYOffset}deg)`;
    }
  });
};
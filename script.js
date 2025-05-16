'use strict';
window.onload = () => {
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 || rect.bottom >= 0);
  }

  function animateScroll() {
    if (!parallax.length && !scrollRotated.length) return;
    
    const scale = 0.15;
    const windowPageYOffset = window.pageYOffset;
    for (const element of parallax) {
      const maxScroll = Math.min((element.height - element.parentElement.offsetHeight) / scale, element.height);
      if (isInView(element) && (windowPageYOffset > 0 && windowPageYOffset <= maxScroll)) element.style.top = `${(-windowPageYOffset * scale)}px`;
    }
    for (let element of scrollRotated) {
      if (isInView(element)) element.style.transform = `rotate(${windowPageYOffset}deg)`;
    }
  }

  const parallax = document.getElementsByClassName('parallax');
  const scrollRotated = document.getElementsByClassName('scroll-rotated');
  document.addEventListener('scroll', animateScroll);
};
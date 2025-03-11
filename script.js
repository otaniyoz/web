'use strict';
window.onload = () => {
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 || rect.bottom >= 0);
  }

  function animateScroll() {
    if (!scrolling.length && !scrollRotated.length) return;
    
    const scale = 0.2;
    const windowPageYOffset = window.pageYOffset;
    for (let element of scrolling) {
      const maxScroll = Math.min((element.height - element.parentElement.offsetHeight) / scale, element.height);
      if (isInView(element) && (windowPageYOffset > 0 && windowPageYOffset <= maxScroll)) {
        element.style.top = (-windowPageYOffset * scale) + 'px';
      }
    }
    for (let element of scrollRotated) {
      if (isInView(element)) element.style.transform = `rotate(${windowPageYOffset}deg)`;
    }
  }

  const scrolling = document.getElementsByClassName('scrolling');
  const scrollRotated = document.getElementsByClassName('scroll-rotated');
  document.addEventListener('scroll', animateScroll);
};
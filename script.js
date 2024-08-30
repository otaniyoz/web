'use strict';
window.onload = () => {
  function animationInterval(ms, signal, callback) {
    const start = document.timeline ? document.timeline.currentTime : performance.now();
    function frame(time) {
      if (!signal) return;
      callback(time);
      scheduleFrame(time);
    }
    function scheduleFrame(time) {
      const elapsed = time - start;
      const roundedElapsed = Math.round(elapsed / ms) * ms;
      const targetNext = start + roundedElapsed + ms;
      const delay = targetNext - performance.now();
      timer = window.setTimeout(() => { window.requestAnimationFrame(frame); }, delay);
    }
    scheduleFrame(start);
  }

  // checks if at least some part of the element is visible
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 || rect.left >= 0 
        || rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
        || rect.right <= (window.innerWidth || document.documentElement.clientWidth));
  }

  function animateScroll() {
    if (scrolling) {
      const windowPageYOffset = window.pageYOffset;
      for (let element of scrollRotated) {
        if (isInView(element)) {
          element.style.transform = `rotate(${windowPageYOffset}deg)`;
        }
      }
    }
    scrolling = false;
  }

  const fps = 60;
  let timer = null;
  let scrolling = false;
  let animationController = true;
  const scrollRotated = document.getElementsByClassName('scroll-rotated');
  animationInterval(1000 / fps, animationController, animateScroll);
  window.addEventListener('scroll', () => { scrolling = true; });
};
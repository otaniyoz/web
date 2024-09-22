'use strict';
window.onload = () => {
  // checks if at least some part of the element is visible. THIS IS NOT EXHAUSTIVE OKAY
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 || rect.bottom >= 0);
  }

  function animateScroll() {
    for (let element of scrollRotated) {
      if (isInView(element)) {
        element.style.transform = `rotate(${window.pageYOffset}deg)`;
      }
    }
  }

  function animateEyes(event) {
    const pointerY = event.offsetY;
    const rect = eyes.getBoundingClientRect();
    const pointerX = event.clientX - eyes.offsetLeft;
    const insides = document.getElementsByClassName('inside');
    const outsides = document.getElementsByClassName('outside');
    const rect1 = outsides[0].getBoundingClientRect();
    const dy = (rect1.height / rect.height) * pointerY - rect1.height / 2;
    const dx = (rect1.width / rect.width) * pointerX - rect1.width / 2;
    insides[0].style.transform = `translate(${dx}px, ${dy}px)`;
    insides[1].style.transform = `translate(${dx}px, ${dy}px)`;
  }

  let scrolling = false;
  const eyes = document.getElementById('eyes');
  const scrollRotated = document.getElementsByClassName('scroll-rotated');
  window.addEventListener('scroll', animateScroll);
  eyes.addEventListener('mousemove', animateEyes);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = `${lazyImage.dataset.src}`;
        io.unobserve(lazyImage);
      }
    });
  }, {root: null, threshold: 0.01});

  const lazyImages = document.querySelectorAll('.lazy');
  for (const lazyImage of lazyImages) {
    io.observe(lazyImage);
  }
};
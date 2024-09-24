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

  function resize() {
    drawBellyCover();
  }

  function drawBellyCover() {
    const distance = 17;
    const threshold = 27;
    const scale = bellyCanvas.parentNode.offsetWidth / bellyPlaceholder.width;
    bellyCanvas.width = scale * bellyPlaceholder.width;
    bellyCanvas.height = scale * bellyPlaceholder.height;
    bellyCtx.drawImage(bellyPlaceholder, 0, 0, bellyCanvas.width, bellyCanvas.height);
    const data = bellyCtx.getImageData(0, 0, bellyCanvas.width, bellyCanvas.height).data;
    bellyCtx.clearRect(0, 0, bellyCanvas.width, bellyCanvas.height);
    bellyCtx.strokeStyle = 'rgba(248, 248, 248, 0.2)';
    for (let i = 0; i < bellyCanvas.width; i++) {
      for (let j = 0; j < bellyCanvas.height; j++) {
        if (data[4.0 * (i + j * bellyCanvas.width)] > threshold) {
          const x = i - (distance * (2 * Math.random() - 1)) | 0;
          const y = j - (distance * (2 * Math.random() - 1)) | 0;
          if (data[4.0 * (x + y * bellyCanvas.width)] > threshold || Math.random() < threshold / 100) {
            bellyCtx.beginPath();
            bellyCtx.moveTo(i, j);
            bellyCtx.lineTo(x, y);
            bellyCtx.stroke();
          }
        }
      }
    }
  }

  let scrolling = false;
  const eyes = document.getElementById('eyes');
  const scrollRotated = document.getElementsByClassName('scroll-rotated');
  const bellyPlaceholder = document.getElementById('belly-canvas-placeholder');
  const bellyCanvas = document.getElementById('belly-canvas');
  const bellyCtx = bellyCanvas.getContext('2d', { alpha: 'false' });
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
  window.addEventListener('scroll', animateScroll);
  window.addEventListener('resize', resize);
  eyes.addEventListener('mousemove', animateEyes);
  drawBellyCover();
};
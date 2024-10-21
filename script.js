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
    const threshold = 27;
    const rect = bellyPlaceholder.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 2;
    
    bellyCanvas.width = rect.width * ratio;
    bellyCanvas.height = rect.height * ratio;
    bellyCanvas.style.width = rect.width + 'px';
    bellyCanvas.style.height = rect.height + 'px';
    bellyCtx.imageSmoothingEnabled = false;
    // bellyCtx.scale(ratio, ratio);

    bellyCtx.drawImage(bellyPlaceholder, 0, 0, bellyCanvas.width, bellyCanvas.height);
    const data = bellyCtx.getImageData(0, 0, bellyCanvas.width, bellyCanvas.height).data;
    bellyCtx.clearRect(0, 0, bellyCanvas.width, bellyCanvas.height);
    bellyCtx.strokeStyle = window.getComputedStyle(document.body).color;
    for (let i = 0; i < bellyCanvas.width; i++) {
      bellyCtx.globalAlpha = 0.25;
      const distance = ratio * threshold * Math.random() + 1;
      for (let j = 0; j < bellyCanvas.height; j++) {
        if (data[4 * (i + j * bellyCanvas.width)] > threshold) {
          const x = i - (distance * (2 * Math.random() - 1)) | 0;
          const y = j - (distance * (2 * Math.random() - 1)) | 0;
          if (data[4 * (x + y * bellyCanvas.width)] > threshold || Math.random() < threshold / 100) {
            bellyCtx.beginPath();
            bellyCtx.moveTo(i, j);
            bellyCtx.lineTo(x, y);
            bellyCtx.stroke();
          }
        }
      }
    }
  }

  // const eyes = document.getElementById('eyes');
  const scrollRotated = document.getElementsByClassName('scroll-rotated');
  const bellyPlaceholder = document.getElementById('belly-canvas-placeholder');
  const bellyCanvas = document.getElementById('belly-canvas');
  const bellyCtx = bellyCanvas.getContext('2d', { alpha: true, willReadFrequently: true });
  window.addEventListener('scroll', animateScroll);
  window.addEventListener('resize', resize);
  // eyes.addEventListener('mousemove', animateEyes);
  drawBellyCover();
};
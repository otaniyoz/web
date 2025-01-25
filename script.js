'use strict';
window.onload = () => {
  function drawBellyCover() {
    const threshold = 27;
    const canvas = document.getElementById('belly-canvas');
    const placeholder = document.getElementById('belly-canvas-placeholder');
    const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: true });
    const parentWidth = canvas.parentElement.clientWidth;
    const parentHeight = canvas.parentElement.clientHeight;
    const length = parentWidth < parentHeight ? parentWidth : parentHeight;
    const ratio = window.devicePixelRatio || 2;
    
    canvas.height = canvas.width = length * ratio;
    canvas.style.height = canvas.style.width = canvas.height + 'px';

    ctx.drawImage(placeholder, 0, 0, canvas.width, canvas.height);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = window.getComputedStyle(document.body).color;
    for (let i = 0; i < canvas.width; i++) {
      ctx.globalAlpha = 0.25;
      const distance = 0.5 * ratio * threshold * Math.random() + 1;
      for (let j = 0; j < canvas.height; j++) {
        if (data[4 * (i + j * canvas.width)] > threshold) {
          const x = i - (distance * (2 * Math.random() - 1)) | 0;
          const y = j - (distance * (2 * Math.random() - 1)) | 0;
          if (data[4 * (x + y * canvas.width)] > threshold || Math.random() < threshold / 100) {
            ctx.beginPath();
            ctx.moveTo(i, j);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
        }
      }
    }
  }


  window.addEventListener('resize', drawBellyCover);
  drawBellyCover();
};
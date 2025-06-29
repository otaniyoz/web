'use strict';
window.onload = () => {
  const canvas = document.getElementById('avatar-canvas');
  const context = canvas.getContext('2d');
  const canvasSize = canvas.parentNode.getBoundingClientRect();
  
  const ratio = window.devicePixelRatio;
  const mainColor = getComputedStyle(document.body).getPropertyValue('--text-main');

  canvas.width = canvasSize.width * ratio;
  canvas.height = canvasSize.height * ratio;
  canvas.style.width = canvasSize + 'px';
  canvas.style.height = canvasSize + 'px';
  context.strokeStyle = `rgba(${mainColor}, 0)`;

  const points = [];
  const severity = 4;
  const tau = 2 * Math.PI;
  const x0 = canvas.width / 2;
  const y0 = canvas.height / 2 + severity / 2;
  const r0 = Math.min(x0, y0) - severity / 2;
  for (let theta = 0; theta < 1; theta += 0.01) {
    const angle = theta * tau;
    const radius = (2 * Math.random() - 1) * severity + r0;
    const x = x0 + radius * Math.cos(angle);
    const y = y0 + radius * Math.sin(angle);
    points.push([x, y]);
  }

  const smoothedPoints = [];
  const windowSize = 0.5 * points.length / severity;
  for (let i = windowSize; i < points.length; i++) {
    let sumX = 0, sumY = 0;
    for (let j = i - windowSize + 1; j <= i; j++) {
      sumX += points[j][0];
      sumY += points[j][1];
    }
    smoothedPoints.push([sumX / windowSize, sumY / windowSize]);
  }

  context.beginPath();
  context.moveTo(smoothedPoints[0][0], smoothedPoints[0][1]);
  for (let i = 1; i < smoothedPoints.length; i++) {
    const p1 = smoothedPoints[i - 1];
    const p2 = smoothedPoints[i];

    const cp1x = p1[0] + (p2[0] - p1[0]) / 3;
    const cp1y = p1[1] + (p2[1] - p1[1]) / 3;
    const cp2x = p2[0] - (p2[0] - p1[0]) / 3;
    const cp2y = p2[1] - (p2[1] - p1[1]) / 3;

    context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2[0], p2[1]);
  }
  context.closePath();
  context.stroke();
};
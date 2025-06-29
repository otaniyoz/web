'use strict';
window.onload = () => {
  const video = document.getElementById('pop-video') ;   
  video.addEventListener('click', () => {
    video.muted = !video.muted;
  });

  if (typeof window.chrome === 'undefined') {
    const animationTarget = document.querySelector('.x-translation');
    const animationTargetWrapper = animationTarget.parentNode;
    animationTargetWrapper.style.overflow = 'auto';
  }
};
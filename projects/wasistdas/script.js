'use strict';
window.onload = () => {
  const video = document.getElementById('pop-video') ;   

  video.addEventListener('click', () => {
    video.muted = !video.muted;
  });
};
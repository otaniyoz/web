'use strict';
window.onload = () => {
  const soundsContainer = document.getElementById('sounds-container');
  const sound1 = document.getElementById('sound-1');
  const sound2 = document.getElementById('sound-2');
  const sound3 = document.getElementById('sound-3');

  soundsContainer.addEventListener('pointerdown', (event) => {
    if (event.target.id === 'image-1') sound1.play();
    else if (event.target.id === 'image-2') sound2.play();
    else if (event.target.id === 'image-3') sound3.play();
  });
};